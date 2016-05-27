<template>
	<div class="form-autocomplete">
	    <div class="form-autocomplete-input">
	        <chip 
	        	:size="d.size"
	        	:icon="d.icon"
	        	:name="d.name"
	        	:selected="d.selected"
	        	:avatar="d.avatar"
	        	:clear="d.close"
	        	@close="close($index)"
	        	v-for="d in _$data"
	        	track-by="$index"
	        >
	        </chip>
	        <input @keyup.enter="submit" class="form-input" type="text" v-model="value" :placeholder="placeholder" />
	    </div>
	    <ul class="form-autocomplete-list" v-if="list" v-show="list.length">
	        <li class="form-autocomplete-item"
	        	v-for="l in _$list"
	        	track-by="$index"
	        >
	        	<chip 
	        		size=""
	        		@click="fliter($index)"
	        		:clear="false"
	        		:icon="l.icon"
	        		:name="l.name"
	        		:selected="l.selected"
	        		:avatar="l.avatar"
	        		:name="l.name">
	        	</chip>
	        </li>
	    </ul>
	</div>
</template>

<script>
	import Chip from './Chip'

	export default {
		props:{
			data:{
				type:Array,
				required:true
			},
			value:{
				type:String,
				twoWay:true,
				required:true
			},
			placeholder:{
				type:String,
				default:''
			},
			list:{
				type:Array
			}
		},
		computed:{
			_$data:function(){
				var data = this.data
				var arrs = []
				var arr
				data.forEach(d => {
					arr = d
					if (typeof d === 'string'){
						arr = {name:d}
					}
					arrs.push(arr)
				})
				return arrs
			},
			_$list:function(){
				var list = this.list
				var arrs = []
				var arr
				list.forEach(d => {
					arr = d
					if (typeof d === 'string'){
						arr = {name:d}
					}
					arrs.push(arr)
				})
				return arrs
			}
		},
		methods:{
			submit:function(){
				this.$dispatch('submit',this.value)
			},
			close:function(index){
				this.$dispatch('close',index)
			},
			fliter:function(index){
				this.$dispatch('filter',this.list[index],index)
			}
		},
		components:{Chip}
	}
</script>