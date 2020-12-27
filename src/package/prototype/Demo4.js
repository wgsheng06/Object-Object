// 原型继承；
// 需要有一个原型模式的对象复制方法；

function prototypeExtend() {
  let F = function () {}; // 缓存类，为实例化返回对象临时创建
  let args = arguments; // 模板对象参数序列
  let len = args.length;
  for(let i = 0;i< len; i++) {
    for(let j in args[i]) {
      F.prototype[j] = args[i][j]
    }
  }
  return new F()
}

// 企鹅游戏对象，游戏中没有企鹅基类，只是提供了一些动作模板对象；我们可以通过实现这些模板对象的继承；来创建一个企鹅实例对象；
var penguin = prototypeExtend({
  speed: 20,
  swim() {
    console.log('游泳速度：' + this.speed)
  },
  run(speed) {
    console.log('跑步速度：' + speed)
  },
  jump() {
    console.log('跳跃动作')
  },
})

console.log(penguin)
penguin.swim()
penguin.run(30)
penguin.jump()