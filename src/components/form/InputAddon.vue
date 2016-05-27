<template>
	<span class="input-group-addon" :class="size && 'addon-'+size"><slot></slot></span>
</template>
<script>
	export default {
		props:{
			size:{
				type:String,
				default:''
			}
		}
	}
</script>