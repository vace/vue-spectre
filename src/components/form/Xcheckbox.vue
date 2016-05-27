<template>
	<label class="form-checkbox">
	    <input type="checkbox" v-model="model" />
	    <i class="form-icon"></i>{{ ' ' }}<slot></slot>
	</label>
</template>
<script>
	export default {
		props:{
			model:{
				default:'',
				required:true,
				toWay:true
			}
		}
	}
</script>