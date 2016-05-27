import {addClass, removeClass} from '../utils/'

export default {
  params: ['pos'],
  bind: function () {
    var el = this.el
    var pos = this.params.pos || 'top'
    addClass(el,'tooltip')
    addClass(el,'tooltip-' + pos)
    el.setAttribute('data-tooltip',this.expression)
  },
  update: function (newValue, oldValue) {
    this.el.setAttribute('data-tooltip',newValue)
  },
  unbind: function () {
    var el = this.el
    var pos = this.params.pos || 'top'
    removeClass(el,'tooltip')
    removeClass(el,'tooltip-' + pos)
    el.removeAttribute('data-tooltip')
  }
}
