<template>
	<div class="btn-group" :class="{'btn-group-block':block}">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		props:{
			block:{
				type: Boolean,
				required: false,
				default: false
			}
		}
	}
</script>