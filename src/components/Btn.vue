<template>
	<button class="btn"
		:disabled="disabled"
		:class="[{loading:loading,'btn-block':block,'btn-primary':primary,'btn-link':link,'btn-default':!primary&&!link},size ? 'btn-'+size:'']"
	>
		<span v-if="icon" :class="['icon','icon-'+icon]"></span>{{' '}}<slot></slot>
	</button>
</template>

<script>
	/*eslint-disable */
	import {toBoolean} from '../utils/funcs'

	export default {
		props:{
			href:{
				type:String,
				default: 'javascript:;'
			},
			primary:{
				type:Boolean,
				default:false,
				coerce:toBoolean
			},
			link:{
				type:Boolean,
				default:false,
				coerce:toBoolean
			},
			disabled: {
			  type: Boolean,
			  required: false,
			  default: false,
			  coerce:toBoolean
			},
			loading: {
			  type: Boolean,
			  required: false,
			  default: false,
			  coerce:toBoolean
			},
			block: {
			  type: Boolean,
			  required: false,
			  default: false,
			  coerce:toBoolean
			},
			size: {
			  type: String,
			  required: false
			},
			text: {
			  type: String,
			  required: false
			},
			icon:{
				type:String,
				required:false
			}
		}
	}
</script>