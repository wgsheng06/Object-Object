// 年底了，公司的大促销活动的设计
// 圣诞节：
// 一部分5折销售
// 一部分8折销售
// 一部分9折销售

// 元旦：
// 普通用户满100返30
// 高级VIP用户满100返50


let PriceStrategy = function () {
  let strategy = {
    // 满100返30
    return30(price) {
      // parseInt可通过~~、|等运算符替换，此时price要在[-2147493648, 2147493647]之间
      // +price 转化为数字类型
      return +price + parseInt(price / 100) * 30;
    },
    // 满100返50
    return50(price) {
      return +price + parseInt(price / 100) * 50;
    },
    // 9折
    percent90(price) {
      return +price  * 100 * 90 / 10000;
    },
    // 8折
    percent80(price) {
      return +price  * 100 * 80 / 10000;
    },
    // 5折
    // percent50(price) {
    //   return +price  * 100 * 50 / 10000;
    // }
  }
  // 策略算法调用接口
  // return function (algorithm, price) {
  //   return strategy[algorithm] && strategy[algorithm](price)
  // }
  // 增加扩展性
  return {
    check(algorithm, price) {
      return strategy[algorithm] ?  strategy[algorithm](price) : '没有找到该策略'
    },
    addStrategy(name, fn) {
      strategy[name] = fn
    }
  }
}();

let price = PriceStrategy.check('percent50', '314.67');
console.log(price)
// 扩展策略
PriceStrategy.addStrategy('percent50', function (price) {
  return +price  * 100 * 50 / 10000;
})
let price2= PriceStrategy.check('percent50', '314.67');
console.log(price2)