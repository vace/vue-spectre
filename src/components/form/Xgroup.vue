<template>
	<div 
		class="form-group" 
		:class="{'has-success':success,'has-danger':danger}">
		<slot name="label">
			<label v-if="label" class="form-label" :for="forid">{{ label }}</label>
		</slot>
		<slot>
			<xinput
				v-if="view_type === 1"
				:success="success"
				:danger="danger"
				:type="type"
				:id="forid"
				:model.sync="model"
				:placeholder="placeholder" 
			></xinput>
			<xtextarea
				v-if="view_type === 5"
				:row="row"
				:success="success"
				:danger="danger"
				:id="forid"
				:model.sync="model"
				:placeholder="placeholder" 
			>
			</xtextarea>
		</slot>
	</div>
</template>
<script>
	import Xinput from './Xinput'
	const TEXT = 1
	const RADIO = 2
	const CHECKBOX = 3
	const SWITCH = 4
	const TEXTAREA = 5

	const conf = {TEXT,RADIO,CHECKBOX,SWITCH,TEXTAREA}

	export default {
		props:{
			label:{
				type:String,
				default:''
			},
			model:{
				default:'',
				toWay:true
			},
			type:{
				type:String,
				default:'text'
			},
			placeholder:{
				type:String,
				default:''
			},
			forid:{
				type:String,
				default:function(){
					return 'id-' + Math.random().toString(16).slice(2)
				}
			},
			danger:{
				type:Boolean,
				default:false
			},
			success:{
				type:Boolean,
				default:false
			},
			row:{
				type:Number,
				coerce(v){ return +v },
				default:3
			}
		},
		computed:{
			view_type(){
				return conf[this.type.toUpperCase()] || TEXT
			}
		},
		components:{
			Xinput
		}
	}
</script>