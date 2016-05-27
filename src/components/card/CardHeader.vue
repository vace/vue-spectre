<template>
	<div class="card-header">
		<h4 class="card-title" v-show="title">{{ title }}</h4>
		<h6 class="card-meta" v-show="meta">{{ meta }}</h6>
		<slot></slot>
	</div>
</template>
<script>
	export default {
		props:{
			title:{
				type:String,
				default:''
			},
			meta:{
				type:String,
				default:''
			}
		}
	}
</script>