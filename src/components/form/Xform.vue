<template>
	<form :class="{'form-horizontal':horizontal}">
		<slot></slot>
	</form>
</template>
<script>
	export default {
		props:{
			horizontal:{
				type:Boolean,
				default:false
			}
		}
	}
</script>