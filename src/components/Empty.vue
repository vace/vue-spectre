<template>
	<div class="empty">
	    <i class="icon icon-" v-show="icon" :class="['icon-'+icon]"></i>{{' '}}
	    <p class="empty-title" v-show="title">{{ title }}</p>
	    <p class="empty-meta" v-show="meta">{{ meta }}</p>
	    <slot></slot>
	</div>
</template>
<script>
	export default {
		props:{
			icon:{
				type:String
			},
			title:{
				type:String
			},
			meta:{
				type:String
			}
		}
	}
</script>