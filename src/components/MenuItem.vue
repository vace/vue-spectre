<template>
	<div :class="header?'menu-header':'menu-item'">
		<span v-if="header && text" class="menu-header-text">{{ text }}</span>
		<slot></slot>
	</div>
</template>
<script>
	export default {
		props:{
			header:{
				type:Boolean,
				default:false
			},
			text:{
				type:String
			}
		}
	}
</script>