<template>
	<a class="btn btn-link"
		:class="[{loading:loading,'btn-block':block,'btn-primary':primary,'btn-default':!primary&&!link},size ? 'btn-'+size:'']"
	>
		<span v-if="icon" :class="['icon','icon-'+icon]"></span>{{' '}}<slot></slot>
	</a>
</template>

<script>
	/*eslint-disable */
	//  href button
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