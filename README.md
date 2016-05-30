# vue-spectre

> spectre components built with Vue.js


(example)[https://vace.me/a/vue-spectre/index.html]

## Build Setup

spectre components built with Vue.js.

This repository contains a set of native Vue.js components based on spectre's markup and CSS.The only required dependencies are:

* [Vue.js](http://vuejs.org/) (required ^v1.x.x, test with v1.0.21).
* [Spectre CSS](https://picturepan2.github.io/spectre)

### NPM

```bash
$ npm install vue-spectre
```

### CommonJS
```js
var btn = require('vue-spectre').Btn;

new Vue({
  components: {
    'btn': btn
  }
})
```

### ES6

```js
import { Btn } from 'vue-spectre'

new Vue({
  components: {
    Btn
  }
})
```

### AMD
```js
$ bower install vue-spectre

define(['vue-spectre'], function(VueSpectre) { var Btn = VueSpectre.Btn });
```

### Browser globals
The `dist` folder contains `vue-spectre.js` and `vue-spectre.min.js` with all components exported in the <code>window.VueSpectre</code> object. 
and on both the Bower and NPM packages.

you can see [test/index](test/index.html)

```html
<script src="path/to/vue.js"></script>
<script src="path/to/vue-spectre.js"></script>
<script>
    var vm = new Vue({
        components: {
            Btn: VueSpectre.Btn
        }
    })
</script>
```

## Docs
See the [documentation](https://vace.me/a/vue-spectre/index.html) with live editable examples.

## Local Setup
* Install with `npm install`
* Run the docs site in development mode with `npm run build`. This will watch for file changes as you work.
* Build with `npm run dist`.


## License
vue-spectre is licensed under [The MIT License](LICENSE).
