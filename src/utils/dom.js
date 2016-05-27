const UA = window && window.navigator.userAgent.toLowerCase()
const isIE9 = UA && UA.indexOf('msie 9.0') > 0


function getClass (el) {
  var classname = el.className
  if (typeof classname === 'object') {
    classname = classname.baseVal || ''
  }
  return classname
}

export function setClass (el, cls) {
  /* istanbul ignore if */
  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
    el.className = cls
  } else {
    el.setAttribute('class', cls)
  }
}

export function addClass (el, cls) {
  if (el.classList) {
    el.classList.add(cls)
  } else {
    var cur = ' ' + getClass(el) + ' '
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      setClass(el, (cur + cls).trim())
    }
  }
}

export function removeClass (el, cls) {
  if (el.classList) {
    el.classList.remove(cls)
  } else {
    var cur = ' ' + getClass(el) + ' '
    var tar = ' ' + cls + ' '
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ')
    }
    setClass(el, cur.trim())
  }
  if (!el.className) {
    el.removeAttribute('class')
  }
}
