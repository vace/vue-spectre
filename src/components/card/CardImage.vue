<template>
	<div class="card-image">
	    <img class="img-responsive" :src="src" v-if="src" />
	    <slot></slot>
	</div>
</template>
<script>
	export default {
		props:{
			src:{
				type:String,
				default:''
			}
		}
	}
</script>