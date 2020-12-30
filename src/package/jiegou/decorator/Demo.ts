/**
 * 假如我们需要为一家咖啡店比如星巴克写一个自动售货系统，需要定义各种各样的咖啡类，这时候我们应该如何定义？
 *  如果单纯的采用继承那么则会造成类爆炸的情况因为调料的排列组合情况多到数不清，我们可以通过装饰器模式来解决这个问题。
 *  我们以饮料这个基类为主体，然后在运行时以调料来装饰饮料，
 *  比方说，如果顾客想要加咖啡和牛奶的卡布奇诺。
 *  那么要做的是：
 *  1 拿到一个卡布奇诺（Cappuccino）对象
 *  2 以咖啡（Coffee）对象装饰它
 *  3 以牛奶（Milk）对象装饰它
 *  4 调用 cost() 方法, 并依赖委托（delegete）将调料的价钱加上去
 */

/**
 * 调料抽象 基类
 */
abstract class Seasoning {
  abstract price: number
  abstract cost(): number 
}

/**
 * 咖啡
 */
class Coffee extends Seasoning {
  public price: number

  constructor() {
    super()
    this.price = 8
  }

  public cost():number {
    return this.price
  }
}

/**
 * 牛奶
 */
class Milk  extends Seasoning {

  public price: number

  constructor() {
    super()
    this.price = 10
  }

  public cost():number {
    return this.price
  }
}

/**
 * 抽象 饮料类
 */
abstract class  Beverage  {
  public desc: string;// 描述
  public price: number;// 价格
  public seasoningArray: Seasoning[];// 调料包；array

  constructor(price = 10) {
    this.price = price;
    this.seasoningArray = []
  }

  cost():number {
    let price = this.price;
    this.seasoningArray.forEach(season => {
      price += season.cost() || 0
    })
    return price
  }

  setSeasoning(season: Seasoning): void {
    this.seasoningArray.push(season)
  }

  getDesc() {
    return this.desc
  }
}


class Cappuccino extends Beverage {
  constructor() {
    super(12);
    this.desc = '在玻璃杯中加入咖啡制成的冰块，倒入加糖煮沸的牛奶，从上面慢慢注入冰冻咖啡，这时牛奶和咖啡分成两层。牛奶泡沫在最上层。'
  }
}


let cappuccino = new Cappuccino();

console.log(cappuccino.desc)
console.log(cappuccino.cost())
let coffee = new Coffee()

cappuccino.setSeasoning(coffee)
console.log(cappuccino.cost())


cappuccino.setSeasoning(new Milk())
console.log(cappuccino.cost())



