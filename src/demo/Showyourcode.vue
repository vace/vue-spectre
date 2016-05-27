<template>
	<div class="show-code" :id="'id-'+id">
		<slot></slot>
		<div class="example" data-text="code">
			<pre>{{{innerHtml}}}</pre>
		</div>
	</div>
</template>
<script>
	import Prism from '../assets/prism'

	let pregExp = /(\b\w+?)=""/g

	const beautify = require('js-beautify').html
	
	const highlight = Prism.highlight

	const language = Prism.languages.html

	export default {
		data(){
			return {
				id:Math.random().toString(16).slice(2),
				innerHtml:''
			}
		},
		ready(){
			var fragment = this._slotContents.default.firstChild
			var innerHtml = '<div>' + fragment.innerHTML.replace(pregExp, '$1') + '</div>'
			var pre = beautify(innerHtml)
			var high = highlight(pre,language)
			// console.log(pre)
			this.innerHtml = high
		}
	}
</script>
<style scope>
</style>