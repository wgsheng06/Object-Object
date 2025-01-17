/**
 * 抽象工厂模式
 */

// 汽车抽象类
const Car = new Function();
Car.prototype = {
  getPrice: function() {
    return new Error('抽象方法不能被调用')
  },
  getSpeed: function() {
    return new Error('抽象方法不能被调用')
  }
}
// 虽然car 没什么用，但是在继承中是很有必要的，如果方法没有被重写调用就会直接报错；
// 子类中如果继承父类的方法并忘记重写，返回一些友好的提示。


// 定义一个抽象的车辆工厂方法
const VehicleFactory = function (subType, superType) {

  // 判断是否有该抽象类
  if (typeof VehicleFactory[superType] === 'function') {
    
    // 缓存类
    const F = new Function();
    // 继承父类的属性与方法
    F.prototype = new VehicleFactory[superType]();
    // 将子类的constructor指向自己
    subType.constructor = subType;
    // 子类原型指向父类的实例
    subType.prototype = new F();
  } else {
    // 没有抽象类返回错误提示
    return new Error('未创建该抽象类')
  }
}

/**
 * 小汽车抽象类
 */
VehicleFactory.Car = function() {
  this.type = 'car'
}
VehicleFactory.Car.prototype = {
  getPrice: function() {
    return new Error('抽象方法不能被调用')
  },
  getSpeed: function() {
    return new Error('抽象方法不能被调用')
  }
}

/**
 * 公共汽车抽象类
 */
VehicleFactory.Bus = function() {
  this.type = 'bus'
}
VehicleFactory.Bus.prototype = {
  getPrice: function() {
    return new Error('抽象方法不能被调用')
  },
  getSpeed: function() {
    return new Error('抽象方法不能被调用')
  }
}

/**
 * 货车抽象类
 */
VehicleFactory.Truck = function() {
  this.type = 'truck'
}
VehicleFactory.Truck.prototype = {
  getPrice: function() {
    return new Error('抽象方法不能被调用')  
  },
  getSpeed: function() {
    return new Error('抽象方法不能被调用')
  }
}

let BMW = function (price, speed) {
  this.price = price;
  this.speed = speed;
}
VehicleFactory(BMW, /** VehicleFactory['Car'] */ 'Car'); // 继承呗就
let bmw = new BMW('50', '360');
BMW.prototype.getPrice = function() {
  console.log(this.type + '车价格为' + this.price + '万')
}

bmw.getPrice() // car车价格为50万
console.log(bmw.getSpeed()) // 如果没有重写方法，则会给出一些提示 Error: 抽象方法不能被调用
BMW.prototype.getSpeed = function() {
  console.log(this.type + '车速度为' + this.speed + 'km/h')
}
bmw.getSpeed() // car车速度为360km/h