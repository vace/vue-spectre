<template>
    <section class="section">
        <section id="getting-started" class="container grid-960">
          <header class="text-center">
            <h4>getting started</h4></header>
          <section class="notes">
            <code>$ npm install vue-spectre</code>
<h5>CommonJS</h5>
            <pre class="language-javascript">
var btn = require('vue-spectre').Btn;

new Vue({
  components: {
    'btn': btn
  }
})
            </pre>
<h5>ES6</h5>

<pre class="language-javascript">
import { Btn } from 'vue-spectre'

new Vue({
  components: {
    Btn
  }
})
</pre>

<h5>AMD</h5>

<pre class="language-javascript">
$ bower install vue-spectre

define(['vue-spectre'], function(VueSpectre) { var Btn = VueSpectre.Btn });
</pre>
          </section>
        </section>
    </section>
</template>
<script>
	
</script>