<template>
	<label class="form-radio">
	    <input type="radio" :name="name" :value="value" v-model="model" />
	    <i class="form-icon"></i> <slot></slot>
	</label>
</template>
<script>
	export default {
		props:{
			name:{
				type:String,
				required:true
			},
			model:{
				required:true,
				twoWay:true
			},
			value:{
				default:''
			}
		}
	}
</script>