// 月末评选最美图片的活动

let ResultState = function () {
  let States = {
    state0() {
      console.log('这是第一种情况')
    },
    state1() {
      console.log('这是第二种情况')
    },
    state2() {
      console.log('这是第三种情况')
    },
    state3() {
      console.log('这是第四种情况')
    },
  }
  // 获取某一种状态并执行其对应的方法
  function show(result) {
    States['state' + result] && States['state' + result]()
  }
  return {
    show
  }
}()

ResultState.show(3);