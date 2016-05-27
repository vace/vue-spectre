<template>
	<div class="columns" :class="[class]">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		props:{
			'class':{
				type:String,
				default:''
			}
		}
	}
</script>