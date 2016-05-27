<template>
	<section id="cards" class="container grid-960">
	    <header class="text-center"><h4>cards</h4></header>
	    <section class="notes">
	        <p><strong>Cards</strong> are flexible content containers.</p>
	    </section>

<Showyourcode>
	    <div class="columns">
	        <div class="column col-4">
	        	<card>
	        		<card.image :src="image"></card.image>
					<card.header title="Microsoft" meta="Software and hardware"></card.header>
					<card.body>
						Empower every person and every organization on the planet to achieve more.
					</card.body>
					<card.footer>
						<a href="#" class="btn btn-primary">Do</a>
					</card.footer>
	        	</card>
	        </div>
	        <div class="column col-4">
	        	<card>
					<card.header title="Apple" meta="Hardware and software"></card.header>
					<card.image :src="image"></card.image>
					<card.body>
						To make a contribution to the world by making tools for the mind that advance humankind.
					</card.body>
					<card.footer>
						<btn-group block>
						    <Btn type="primary">Buy</Btn>
						    <Btn>Buy</Btn>
						    <Btn>Buy</Btn>
						</btn>
					</card.footer>
	        	</card>
	        </div>
	        <div class="column col-4">
	        	<card>
					<card.header title="Google" meta="Software and hardware"></card.header>
					<card.body>
						Organize the world’s information and make it universally accessible and useful.
					</card.body>
					<card.image :src="image"></card.image>
	        	</card>
	        </div>
	    </div>
</Showyourcode>
	    <section class="notes">
	        <p>Add a container element with the class <code>card</code>. And add child elements with the class name <code>card-image</code>, <code>card-header</code>, <code>card-content</code> and/or <code>card-footer</code>. The <code>card-image</code> can be placed in any position. </p>
	    </section>
    </section>
</template>
<script>
	import image from '../assets/capitan.jpg'
	import Card from '../components/card'

	export default {
		data(){
			return {image}
		},
		components:{
			'card.image':Card.Image,
			'card.body':Card.Body,
			'card.footer':Card.Footer,
			'card.header':Card.Header
		}
	}
</script>