<template>
	<section id="toasts" class="container grid-960">
	    <header class="text-center"><h4>toasts</h4></header>
	    <section class="notes">
	        <p><strong>Toasts</strong> are used to show alert or information to users.</p>
	    </section>
<Showyourcode>
<div>
	    <div class="columns">
	        <div class="column">
	            <Toast>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Toast>
	        </div>
	        <div class="column">
		        <Toast icon="linux" type="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Toast>
	        </div>
	    </div>
</div>
</Showyourcode>

<Showyourcode>
<div>
	    <div class="columns">
	        <div class="column">
	        	<Toast icon="github" type="success">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Toast>
	        </div>
	        <div class="column">
	        	<Toast icon="weixin" type="danger">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Toast>
	        </div>
	    </div>
</div>
</Showyourcode>

<Showyourcode>
<div>
	    <div class="columns">
	    	<div class="column">
	    		<Toast icon="github" type="success" :clear="false">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Toast>
	    	</div>
	    	<div class="column">
	    		<Toast icon="github" type="danger" @close="when_close">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Toast>
	    	</div>
	    </div>
</div>
</Showyourcode>

	    <section class="notes">
	        <p>Add a container element with the class <code>toast</code>. You can add any text within the container, and even icons. You may also add a close button with the class <code>btn-clear</code> if you need. </p>
	        <p>And you can add the class <code>toast-primary</code>, <code>toast-success</code> or <code>toast-danger</code> for additional toast colors.</p>
	    </section>
    </section>
</template>
<script>
	export default {
		methods:{
			when_close(){
				console.log('close click')
			}
		}
	}
</script>