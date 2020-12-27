/**
 * 一个简单的单例
 */

const Sheng = {
  g(id) {
    return document.getElementById(id);
  },
  css(id, key, value) {
    this.g(id).style[key] = value;
  }
}