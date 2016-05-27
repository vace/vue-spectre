<template>
	<section id="tooltips" class="container grid-960">
	    <header class="text-center"><h4>tooltips</h4></header>
	    <section class="notes">
	        <p><strong>Tooltips</strong> provide context information labels that appear on hover and focus.</p>
	    </section>

<Showyourcode>
	    <div class="columns text-center">
	        <div class="column">
	        	<Btn type="primary" v-tooltip="text" pos="top">top tooltip</Btn>
	        </div>
	        <div class="column">
	            <Btn type="primary" v-tooltip="text" pos="left">left tooltip</Btn>
	        </div>
	        <div class="column">
	            <Btn type="primary" v-tooltip="text" pos="bottom">bottom tooltip</Btn>
	        </div>
	        <div class="column">
	           	<Btn type="primary" v-tooltip="text" pos="right">right tooltip</Btn>
	        </div>
	    </div>
</Showyourcode>

	    <section class="notes">
	        <p>Tooltip component is built entirely in CSS.</p>
	        <p>Add the class <code>tooltip</code> and the attribute <code>data-tooltip</code>, which contains the tooltip content, to non self closing elements. And add the class name <code>tooltip-right</code>, <code>tooltip-bottom</code> or <code>tooltip-left</code> to define the position of a tooltip. By default, the tooltip appears above the element.</p>
	    </section>
    </section>
</template>
<script>
	export default {
		data(){
			return {
				text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			}
		}
	}
</script>