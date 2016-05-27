<template>
	<span :class="['icon','icon-'+name]"></span>
</template>
<script>
	export default {
		props:{
			name:{
				type:String,
				required:true
			}
		}
	}
</script>