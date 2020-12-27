// 例：ie 和 chrome 或其他浏览器兼容性不同调用不同的方法
// 我们暴露统一的接口给用户去使用，用户不需要在意内部的逻辑实现，我们在底层会做好兼容

function addEvent(dom, type, fn) {
  // 对于支持DOM2级事件处理程序 addEventListener 方法的浏览器
  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false)
  } else if (dom.attachEvent) {
    // 对于不支持 addEventListener 但支持attachEvent 方法的浏览器
    dom.attachEvent(`on${type}`, fn);
  } else {
    // 对于不支持 addEventListener 也不支持attachEvent 方法的浏览器
    dom[`on${type}`] = fn
  }
}

// 除此之外 ie低版本不兼容 e.preventDefault() 和 e.target 
// 也可以通过外观模式来解决
const  getEvent = function (event) {
  // 标准浏览器返回event id下返回 window.event
  return event || window.event;
}

const getTarget = function (event) {
  let e = getEvent(event)
  // 准浏览器返回event.target id下返回 event.srcElement
  return e.target || e.srcElement;
}

const preventDefault = function (event) {
  let e = getEvent(event)
  if (e.preventDefault) { // 标准
    e.preventDefault()
  }else {//ie
    e.returnValue = false
  }
}