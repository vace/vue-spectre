<template>
	<ul class="breadcrumb">
	    <li class="breadcrumb-item">
	        <a href="#breadcrumbs">
	            Home
	        </a>
	    </li>
	    <li class="breadcrumb-item">
	        <a href="#breadcrumbs">
	            Profile
	        </a>
	    </li>
	    <li class="breadcrumb-item">
	        <a href="#breadcrumbs">
	            Change avatar
	        </a>
	    </li>
	</ul>
</template>
<script>
	export default {
		props:{
			data:{
				type:Array
			}
		}
	}
</script>