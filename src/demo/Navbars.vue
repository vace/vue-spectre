<template>
	<section id="navbar" class="container grid-960">
		<header class="text-center"><h4>navbar</h4></header>
		<section class="notes">
		    <p><strong>Navbar</strong> is a layout container that appear in the header of apps and websites. </p>
		</section>
		<div class="columns">
		    <div class="column">

<Showyourcode>
<div>
		    	<Navbar class="bg-grey">
					<div slot="left">
						<a href="#navbar" class="btn btn-link btn-lg"><i class="icon icon-rss"></i></a>
						<a href="#navbar" class="navbar-brand">Spectre.css</a>
					</div>
					<div slot="right">
						<input class="form-input input-inline" type="text" placeholder="search" />
						<a href="#navbar" class="btn btn-link">documents</a>
						<a href="#navbar" class="btn btn-link">login</a>
						<a href="#navbar" class="btn btn-primary">signup</a>
					</div>
		    	</Navbar>
</div>
</Showyourcode>

		    </div>
		</div>

		<div class="columns">
		    <div class="column">

<Showyourcode>
<div>
		    	<Navbar>
		    		<div slot="left">
		    			<a href="#navbar" class="btn btn-link btn-lg"><i class="icon icon-rss"></i></a>
		    			<a href="#navbar" class="navbar-brand">Spectre.css</a>
		    		</div>
		    		<div slot="right">
		    			<input class="form-input input-inline" type="text" placeholder="search" />
		    			<figure class="avatar ml-10 mr-10">
		    			    <img src="../assets/logo.png" height="200" width="200" />
		    			</figure>
		    			<a href="#navbar" class="btn btn-primary">share</a>
		    		</div>
		    	</Navbar>
</div>
</Showyourcode>

		    </div>
		</div>

		<section class="notes">
		    <p>A navbar component can include logo brand, nav links and buttons, search box or any combination of those elements. By default, there is no grey background.</p>
		</section>
	</section>
</template>