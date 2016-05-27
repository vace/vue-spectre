<template>
	<label class="form-label" :for="forid"><slot></slot></label>
</template>
<script>
	export default {
		props:{
			forid:{
				type:String,
				default:''
			}
		}
	}
</script>