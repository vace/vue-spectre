<template>
	<div class="input-group">
		<slot>
			<span v-if="addon" class="input-group-addon">{{ addon }}</span>
		    <xinput 
		    	:placeholder="placeholder"
		    	:type="type"
		    	:size="size"
		    	:model.sync="model"
		    	:danger="danger"
		    	:success="success"
		    >
		    </xinput>
		    <btn v-if="btn" @click="submit" class="input-group-btn btn-primary">{{ btn }}</btn>
		</slot>
	</div>
</template>
<script>
	import Xinput from './Xinput'
	import Btn from '../Btn'

	export default {
		props:{
			addon:{
				type:String,
				default:false
			},
			placeholder:{
				type:String,
				default:''
			},
			type:{
				type:String,
				default:'text'
			},
			size:{
				type:String,
				default:''
			},
			model:{
				default:'',
				toWay:true
			},
			danger:{
				type:Boolean,
				default:false
			},
			success:{
				type:Boolean,
				default:false
			},
			btn:{
				type:String,
				default:''
			}
		},
		components:{
			Xinput,Btn
		},
		methods:{
			submit(){
				this.$dispatch('submit')
			}
		}
	}
</script>