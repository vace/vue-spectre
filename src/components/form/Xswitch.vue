<template>
	<label class="form-switch">
	    <input type="checkbox" v-model="model" :name="name"/>
	    <i class="form-icon"></i>{{ ' ' }}<slot></slot>
	</label>
</template>
<script>
	export default {
		props:{
			model:{
				required:true,
				twoWay:true
			},
			name:{
				type:String
			}
		}
	}
</script>