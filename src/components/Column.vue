<template>
	<div :class="[flex && 'column',col && 'col-'+col  , hide && 'hide-'+hide ]">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		props:{
			flex:{
				type:Boolean,
				default:false
			},
			col:{
				type:String
			},
			hide:{
				type:String,
				default:''
			}
		}
	}
</script>