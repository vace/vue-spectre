<template>
	<section id="chips" class="container grid-960">
	    <header class="text-center"><h4>chips</h4></header>
	    <section class="notes">
	        <p><strong>Chips</strong> are complex entities in small blocks. </p>
	    </section>

<Showyourcode>
	    <div class="columns">
	        <div class="column">
	        	<chip @close="chip_close(100)" name="Drama"></chip>
	        	<chip name="Google" icon="google0"></chip>
	        	<chip name="Biography"></chip>
	        	<chip name="Mystery"></chip>
	        	<chip name="Mystery" selected></chip>
	        </div>
	        <div class="column">
				<chip name="Drama" :avatar="logo"></chip>
				<chip name="Tony Stark" :avatar="avatar1"></chip>
				<chip name="Thor Odinson" :avatar="avatar2"></chip>
				<chip name="Steve Rogers" :avatar="logo"></chip>
	        </div>
	    </div>
</Showyourcode>

	    <section class="notes">
	        <p>Add a container element with the class <code>chip</code>. And add child text elements with <code>chip-name</code> or icons with  <code>icon</code>.</p>
	    </section>

    </section>
</template>
<script>
	import logo from '../assets/logo.png'
	import avatar1 from '../assets/avatar-1.png'
	import avatar2 from '../assets/avatar-2.png'
	export default {
		data(){
			return {logo,avatar1,avatar2}
		},
		methods:{
			chip_close:function(n){
				console.log('close',n)
			}
		}
	}
</script>