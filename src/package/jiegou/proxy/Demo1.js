// 跨域问题
// 站长统计
// img的get请求统计数量，是单向的不确认会不会接收到

// 统计代理
const Count = (function () {
  let _img = new Image();
  return function (params) {
    let str = 'http:***';
    for(let i in params) {
      str+= i+ '=' + params[i]
      _img.src = str
    }
  }
})();

Count({num: 10})