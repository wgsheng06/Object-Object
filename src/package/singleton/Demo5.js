// "惰性创建" 单例
// 单例的延迟缓存呗；
let LazySingle = (function () {
  let _instence = null;
  function Single() {
    return {
      method() {},
      property: '0.1'
    }
  }
  return function () {
    if (!_instence) {
      _instence = Single()
    }
    return _instence
  }
})()

console.log(LazySingle().property)