<template>
	<section id="menus" class="container grid-960">
	    <header class="text-center"><h4>menus</h4></header>
	    <section class="notes">
	        <p>A <strong>menu</strong> is a vertical list of links or buttons for actions and navigation.</p>
	    </section>

<Showyourcode>
	    <div class="columns">
	        <div class="column">
				<menu-wrap>
	                <menu-item>
	                	<chip name="Steve Rogers" size="" :clear="false" :avatar="logo"></chip>
	                </menu-item>
	                <menu-item>
	                    <a href="#menus" class="active">My profile</a>
	                </menu-item>
	                <divider></divider>
	                <menu-item>
	                    <a href="#menus">Settings</a>
	                </menu-item>
	                <menu-item>
	                    <a href="#menus">Logout</a>
	                </menu-item>
				</menu-wrap>
	        </div>
	        <div class="column">
	        	<menu-wrap>
	        		<menu-item header text="Go to"></menu-item>
	        		<menu-item>
	        		    <a href="#menus">Slack</a>
	        		</menu-item>
	        		<menu-item>
	        		    <a href="#menus">Hipchat</a>
	        		</menu-item>
	        		 <menu-item>Skype</menu-item>
	        	</menu-wrap>
	        </div>
	        <div class="column">
	        	<menu-wrap>
	        		<menu-item header text="Go to"></menu-item>
	        		<menu-item>
	        		    <a href="#menus"><icon name="less"></icon> Less</a>
	        		</menu-item>
	        		<menu-item>
	        		    <a href="#menus"><icon name="linux"></icon> Linux</a>
	        		</menu-item>
	        		 <menu-item><icon name="python"></icon> python</menu-item>
	        	</menu-wrap>
	        </div>
	    </div>
</Showyourcode>

	    <section class="notes">
	        <p>Add a container element with the class <code>menu</code>. And add child elements with the classname <code>menu-item</code>. You can separate menu items with a <code>divider</code> or <code>menu-header</code>. Spectre.css does not include JavaScript code, you will need to implement your JS to interact with the menus.</p>
	    </section>
    </section>
</template>
<script>
	import logo from '../assets/avatar-1.png'

	export default {
		data(){
			return {logo}
		}
	}
</script>