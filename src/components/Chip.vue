<template>
	<div class="chip" :class="[size && 'chip-'+size , selected && 'selected']">
		<span v-show="icon" class="icon" :class="icon && 'icon-'+icon"></span>{{' '}}
		<img v-if="avatar" :src="avatar" class="avatar" />
	    <span class="chip-name">{{ name }}</span>
	    <slot></slot>
	    <button @click="close" v-show="clear" class="btn btn-clear"></button>
	</div>
</template>
<script>
	export default {
		props:{
			size:{
				type:String,
				default:'sm'
			},
			name:{
				type:String,
				default:''
			},
			clear:{
				type:Boolean,
				default:true
			},
			icon:{
				type:String,
				default:''
			},
			avatar:{
				type:String,
				default:''
			},
			selected:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			close:function(e){
				this.$dispatch('close',e)
			}
		}
	}
</script>