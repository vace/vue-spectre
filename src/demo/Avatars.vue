<template>
	<section id="avatars" class="container grid-960">
	    <header class="text-center"><h4>avatars</h4></header>
	    <section class="notes">
	        <p><strong>Avatars</strong> are user profile pictures. </p>
	    </section>

<Showyourcode>
	    <div class="columns">
	        <div class="column col-3">
	        	<avatar size="xl" :src="logo"></avatar>
	        	<avatar size="lg" :src="avatar1"></avatar>
	        	<avatar :src="avatar2"></avatar>
	        	<avatar size="sm" :src="logo"></avatar>
	        	<avatar size="xs" :src="avatar1"></avatar>
	        </div>
	        <div class="column col-3">
	        	<avatar size="xl" :src="logo" :icon="avatar1"></avatar>
	        	<avatar size="lg" :src="avatar1" :icon="avatar2"></avatar>
	        	<avatar :src="avatar2" :icon="logo"></avatar>
	        	<avatar size="sm" :src="avatar2" :icon="avatar1"></avatar>
	        	<avatar size="xs" :src="logo" :icon="avatar1"></avatar>
	        </div>

	        <div class="column col-3">
	        	<avatar size="xl" style="background:#5764c6" text="VUE"></avatar>
	        	<avatar size="lg" style="background:#5764c6" text="VUE"></avatar>
	        	<avatar style="background:#5764c6" text="VUE"></avatar>
	        	<avatar size="sm" style="background:#5764c6" text="VUE"></avatar>
	        	<avatar size="xs" style="background:#5764c6" text="VUE"></avatar>
	        </div>
	    </div>
</Showyourcode>

	</section>
</template>
<script>
	import logo from '../assets/logo.png'
	import avatar1 from '../assets/avatar-1.png'
	import avatar2 from '../assets/avatar-2.png'

	export default {
		data(){
			return {logo,avatar1,avatar2}
		}
	}
</script>