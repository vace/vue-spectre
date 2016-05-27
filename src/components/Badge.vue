<template>
	<span class="badge" :data-badge="data">
	    <slot></slot>
	</span>
</template>
<script>
	export default {
		props:{
			data:{
				type:[String,Number],
				default:0
			}
		}
	}
</script>