<template>
	<figure 
		class="avatar" 
		:class="[size && 'avatar-'+size]"
		:data-initial="text"
	>
	    <img v-if="src" :src="src" />
	    <img v-if="icon" :src="icon" class="avatar-icon" />
	</figure>
</template>

<script>
	export default {
		props:{
			src:{
				type:String
			},
			icon:{
				type:String
			},
			size:{
				type:String
			},
			text:{
				type:String
			}
		}
	}
</script>