// 原型模式
// 用原型实例指向创建对象的类，适用于创建新的对象的类共享原型的属性以及方法

// 轮播图类
const LoopImages = function (imgArr, container) {
  this.imageArray = imgArr; // img数组
  this.container = container; // 轮播图片容器
  this.createImage = function () {}; // 新增一个图片
  this.changeImage = function () {} // 切换到下一张图片
}

// 上下滑动切换类
const SlideLoopImg = function (imgArr, container) {
  LoopImages.call                                                                                                                                                                                                                                                                                                                                                                                                                                                    (this, imgArr, container);
  this.changeImage = function () {
    console.log('SlideLoopImg changeImage function')
  }
}

// 渐隐切换类
const FadeLoopImg = function (imgArr, container, arrow) {
  LoopImages.call(this, imgArr, container); // 这么去写，每次创建实例的时候都会执行一次loopimages函数；有性能问题
  this.arrow = arrow
  this.changeImage = function () {
    console.log('FadeLoopImg changeImage function')
  }
}

var fadeImg = new FadeLoopImg(['01.jpg, 02.jpg'], 'slied', ['left.png, right.png']);
fadeImg.changeImage()