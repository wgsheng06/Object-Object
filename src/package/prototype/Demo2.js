// 优化原型模式
// Demo1的模式，会产生性能问题；那么我们将父类的复用内容放到原型里；子类的原型指向父类的某个实例；公用父类的方法；
// 还方便子类去扩展重写方法；

// 轮播图类
const LoopImages = function (imgArr, container) {
  this.imageArray = imgArr; // img数组
  this.container = container; // 轮播图片容器
  // this.createImage = function () {}; // 新增一个图片
  // this.changeImage = function () {} // 切换到下一张图片
}

LoopImages.prototype = {
  createImage() {
    console.log('LoopImages createImage function')
  },
  changeImage() {
    console.log('LoopImages changeImage function')
  }
}

// 上下滑动切换类
const SlideLoopImg = function (imgArr, container) {
  LoopImages.call(this, imgArr, container); // 这么去写，每次创建实例的时候都会执行一次loopimages函数；有性能问题                                                                                                                                                                                                                                                                                                                                                                                                                                                   (this, imgArr, container);
  // this.changeImage = function () {
  //   console.log('SlideLoopImg changeImage function')
  // }
}
SlideLoopImg.prototype = new LoopImages(); // ????
SlideLoopImg.prototype.changeImage = function () {
  console.log('SlideLoopImg changeImage function')
}

// 渐隐切换类
const FadeLoopImg = function (imgArr, container, arrow) {
  LoopImages.call(this, imgArr, container); // 这么去写，每次创建实例的时候都会执行一次loopimages函数；有性能问题
  this.arrow = arrow
  // this.changeImage = function () {
  //   console.log('FadeLoopImg changeImage function')
  // }
}
FadeLoopImg.prototype = new LoopImages(); // ???? 原型指向 基类的实例，方便重写方法？
FadeLoopImg.prototype.changeImage = function () {
  console.log('FadeLoopImg changeImage function')
}

var fadeImg = new FadeLoopImg(['01.jpg, 02.jpg'], 'slied', ['left.png, right.png']);
fadeImg.changeImage()