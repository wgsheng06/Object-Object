/**
 * 建造者模式
 */
// 将一个复杂对象的构建层和表示层分离开，复用相同的构建过程

// 创建一个“人”类
const Human = function (param) {
  this.skill = param && param.skill || '保密' // 技能
  this.hobby = param && param.hobby || '保密' // 爱好
}

Human.prototype = {
  getSkill () {
    return this.skill
  },
  gethobby () {
    return this.hobby
  },
}

// 姓名类 
const Named = function (name) {
  const that = this;
  // 构造器
  // 构造函数解析姓名的姓与名
  (function(name, that) {
    that.wholeName = name;
    if (name.indexOf(" ") > -1) {
      that.FirstName = name.slice(0, name.indexOf(" "));
      that.SecondName = name.slice(name.indexOf(" "));
    }
  })(name, that)
}

// 实例化一个职位类
const Work = function(work) {
  const func = (work) => {
    switch (work) {
      case 'code':
        this.work = '工程师';
        this.workDescript = '每天沉醉于编程'
        break;
      case 'UI':
        this.work = '设计师';
        this.workDescript = '设计更似一种艺术'
        break;
      case 'teach':
        this.work = '教师';
        this.workDescript = '分享也是一种快乐'
        break;
      default:
        this.work = work;
        this.workDescript = '对不起，我们还不清楚您所选择职位的相关描述'
        break;
    }
  }
  func(work)
}

// 更换期望的职位
Work.prototype.changeWork = function(work) {
  this.work = work
}

// 添加对职位的描述
Work.prototype.changeDescript = function(workDescript) {
  this.workDescript = workDescript
}

/**
 * 应聘者创建类
 * @param {*} name 姓名（全名）
 * @param {*} work 期望职位
 */
const Person = function(name, work) {
  // 创建应聘者缓存对象
  const _person = new Human()

  // 创建应聘者姓名解析对象
  _person.name = new Named(name);
  
  // 创建应聘者期望职位
  _person.work = new Work(work);

  // 返回应聘者对象
  return _person;
}

const person  = new Person('xiao ming', 'code');
console.log(person)
console.log(person.work.workDescript)

person.work.changeDescript('更改职位描述！')
console.log(person.work.workDescript)