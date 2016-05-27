<template>
	<span class="label" :class="{'label-primary':primary}"><slot></slot></span>
</template>
<script>
	import {toBoolean} from '../utils/funcs'
	export default {
		props:{
			primary:{
				type:Boolean,
				default:false,
				coerce:toBoolean
			}
		}
	}
</script>