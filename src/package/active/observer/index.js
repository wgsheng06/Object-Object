const Observer = (function () {
  let _message = {};
  return {
    // 注册信息接口
    // 接受2个参数，类型和执行方法；
    // 判断是否存在此类型的队列，不存在则创建，存在则追加到该类型的任务队列之后
    regist(type, fn) {
      if (_message[type]) {
        _message[type].push(fn)
      } else {
        _message[type] = [fn]
      }
      return this
    },

    // 发布信息接口
    // 发布接口既要告诉订阅者 当前发布的类型，也要传递发的参数
    // 判断是否存在订阅队列，如果不存在直接return，存在则遍历消息执行方法队列
    fire(type, args) {
      if (!_message[type]) {
        return
      }
      // 定义消息信息
      let events = {
        type, // 消息类型
        args:args || {} // 消息携带数据
      }
      _message[type].forEach(ele => ele.call(this, events))
    },

    // 移除信息接口
    // 把订阅者在消息队列中订阅的方法从队列中移除
    // 需要移除的类型与移除的方法
    remove(type, fn) {
      if (Array.isArray(_message[type])) {
        let index = _message[type].findIndex(ele => ele === fn);
        if (index + 1) { // 没找到返回-1
          _message[type].splice(index, 1)
        }
      }
    }
  }
})()

// 测试
Observer.regist('test', (e) => {
  console.log(e, 'test')
})

Observer.fire('test', 'fire')

export default Observer

