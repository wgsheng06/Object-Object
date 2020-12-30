
import Observer from './index'

// 外观模式。简化获取元素
function $(id) {
  return document.getElementById(id)
}

// A开发
(function (params) {
  // 追加一条消息
  function addMsgItem(e) {
    let text = a.args.text,
    ul = $('msg'),
    li = document.createElement('li'),
    span = document.createElement('span');
    li.innerHTML = text;
    // 关闭按钮
    span.onclick = function () {
      ul.removeChild(li);
      Observer.fire('removeMsg', { num: -1 })
    }

    li.appendChild(span)
    ul.appendChild(li)
    $('demo').appendChild(ul)
  }

  Observer.regist('addMsg', addMsgItem)

})();


// B开发
(function () {
  function changeMsgNum(e) {
    let num = e.args.num;
    $('msg_num').innerHTML = parseInt($('msg_num').innerHTML) + num;

  }

  Observer.regist('addMsg', changeMsgNum)
  Observer.regist('removeMsg', changeMsgNum);

})();


// C开发
(function () {
  let user_submit = document.createElement('button')
  user_submit.setAttribute('id', 'user_submit')
  user_submit.innerHTML = '提交'
  $('demo').appendChild(user_submit)
  user_submit.onclick = function () {
    let text = $('user_input');
    if (text.value === '') {
      return;
    }
    Observer.fire('addMsg', {
      text: value,
      num: 1
    })
    text.value = ''
  }
})();