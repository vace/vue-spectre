<template>
	<section id="navigation" class="container grid-960">
	    <header class="text-center"><h4>navigation</h4></header>
	    <section class="notes">
	        <p><strong>Navigation</strong> includes several components, including breadcrumbs and tabs.</p>
	    </section>
	    <header id="breadcrumbs" class="text-center"><h5>breadcrumbs</h5></header>
	    <div class="columns">
<Showyourcode>
<div>
	        <Crumb :data="lists"></Crumb>
	        <script type="text/html">
	        	var list = [
	        		{'name':'Home','href':'#breadcrumbs'},
	        		{'name':'Profile','href':'#breadcrumbs'},
	        		{'name':'Change avatar','href':'#breadcrumbs'}
	        	]
	        </script>
</div>

</Showyourcode>
	    </div>
	    <section class="notes">
	        <p>Add a container element with the class <code>breadcrumb</code>. And add child elements with the classname <code>breadcrumb-item</code>.</p>
	    </section>
	</section>
</template>
<script>
	export default {
		data(){
			return {
				lists:[
					{'name':'Home','href':'#breadcrumbs'},
					{'name':'Profile','href':'#breadcrumbs'},
					{'name':'Change avatar','href':'#breadcrumbs'}
				]
			}
		}
	}
</script>