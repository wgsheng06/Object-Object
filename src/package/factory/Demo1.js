/**
 * 安全的  工厂方法模式
 */
const Factory = function(type, content) {
  console.log(type, content, this, this && this[type])
  if (this instanceof Factory) {
    console.log(123, this)
    const a =  new this[type](content);
    return a;
  } else {
    return new Factory(type, content)
  }
}

Factory.prototype = {
  Java: function(content) {
    this.content = content;
    this.show = function () {
      console.log(this.content)
    }
  } ,
  JavaScript: function(content) {
    this.content = content;
    this.show = function () {
      console.log(this.content)
    }
  }
}

const Java = Factory('Java', 'lalalala') // or new Factory('Java', 'lalalala')
Java.show() // lalalala