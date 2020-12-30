/**
 * 学生和老师在课堂上的问答
 */

import Observer from './index'

// 学生会被老师提问，所以学生充当订阅者
// 同时学生又可以对问题进行思考与回答；
const Student = function (result) {
  let self = this;
  this.result = result;
  this.say = function () {
    console.log(self.result)
  }
}

// 学生可以回答方法，所有学生公用一个回答方法
Student.prototype.anwser = function (question) {
  // 注册参数问题；
  Observer.regist(question, this.say)
}


// 还有一类学生此时正在睡觉，此时不能回答问题了，那么需要一个睡觉方法sleep
Student.prototype.sleep = function (question) {
  console.log(this.result + " " + question + ' 已被注销')
  // 注册参数问题；
  Observer.remove(question, this.say)
}


// 老师的类，可以提问学生
const Teacher = function () {
  
}
Teacher.prototype.ask = function (question) {
  console.log('问题是：' + question)
  // 注册参数问题；
  Observer.fire(question)
}


let st1 = new Student('学生1回答问题');
let st2 = new Student('学生2回答问题');
let st3 = new Student('学生3回答问题');

st1.anwser('设计模式')
st1.anwser('观察者模式')
st2.anwser('设计模式')
st2.anwser('观察者模式')
st3.anwser('设计模式')
st3.anwser('观察者模式')

st3.sleep('观察者模式')


let th = new Teacher();
th.ask('设计模式')
th.ask('观察者模式')