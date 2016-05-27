<template>
	<select :name="name" class="form-select" :class="size && 'select-'+size" v-model="model">
	    <option track-by="$index" :value="d.key" v-for="d in list_data">{{ d.text }}</option>
	</select>
</template>
<script>
	export default {
		props:{
			data:{
				type:Array,
				required:true,
				default:[]
			},
			key:{
				type:Boolean,
				default:false
			},
			model:{
				required:true,
				twoWay:true
			},
			name:{
				type:String,
				required:false
			},
			size:{
				type:String,
				default:''
			}
		},
		computed:{
			list_data(){
				var key = this.key
				return this.data.map(function(d,index){
					if (typeof d === 'number' || typeof d === 'string'){
						return {key:key ? index : d,text:d}
					}
					return d
				})
			}
		}
	}
</script>