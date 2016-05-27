<template>
	<div class="toast" :class="type && 'toast-'+type">
	    <button v-if="clear" @click="close" class="btn btn-clear float-right"></button>
	    <span v-if="icon" :class="['icon',icon && 'icon-' + icon]"></span>{{' '}}
	    <slot></slot>
	</div>
</template>
<script>
	export default {
		props:{
			type:{
				type:String,
				default:''
			},
			clear:{
				type:Boolean,
				default:true
			},
			icon:{
				type:String
			}
		},
		methods:{
			close:function(e){
				this.$dispatch('close')
			}
		}
	}
</script>