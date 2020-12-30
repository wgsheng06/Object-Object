
/**
 * 超级玛丽
 */
// 跳跃、开枪、蹲下、奔跑 都是一个一个的状态；

// 错误示范
let lastAction = "";

function changeMarry(action) {
  
}

// 好的例子
let MarryAction = function () {
  // 内部状态  私有变量
  let _currentState = {};
  // 动作与状态方法映射
  let states = {
    jump() {
      console.log('跳跃')
    },
    move() {
      console.log('移动')
    },
    shoot() {
      console.log('射击')
    },
    squat() {
      console.log('蹲下')
    }
  }

  // 动作控制类
  let Action = {
    
    // 改变状态方法
    changeAction () {
      let arg = Array.prototype.slice.call(arguments);
      _currentState = {};
      if (arg.length) {
        arg.forEach(argItem => {
          _currentState[argItem] = true;
        })
      }
      // this.goes()
      return this;
    },
    // 执行动作
    goes() {
      console.log('触发一次动作');
      for (let i in _currentState) {
        states[i] && states[i]()
      }
      return this;
    }
  }
  return {
    change: Action.changeAction,
    goes: Action.goes
  }
}


// MarryAction().change('jump', 'shoot') // 添加跳跃与射击动作
//   .goes() // 执行动作
//   .goes() // 执行动作
//   .change('shoot') // 添加射击动作
//   .goes(); // 执行动作

let marry = new MarryAction();
marry.change('jump', 'shoot') // 添加跳跃与射击动作
.goes() // 执行动作
.goes() // 执行动作
.change('shoot') // 添加射击动作
.goes(); // 执行动作