import {addClass, removeClass} from '../utils/'

export default {
  bind: function () {
    var el = this.el
    addClass(el,'badge')
    el.setAttribute('data-badge',this.expression)
  },
  update: function (newValue, oldValue) {
    this.el.setAttribute('data-badge',newValue)
  },
  unbind: function () {
    var el = this.el
    removeClass(el,'badge')
    el.removeAttribute('data-badge')
  }
}
