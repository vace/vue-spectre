<template>
	<section class="container grid-960" id="buttons">
	  <header class="text-center">
	    <h4>buttons</h4></header>
	  <section class="notes">
	    <p><strong>Buttons</strong> include simple button styles for actions in different types and sizes. </p>
	  </section>

<Showyourcode>
		  <div class="columns">
		    <div class="column">
		      <Btn>default button</Btn>
		      <Btn loading>default button</Btn>
		    </div>
		    <div class="column">
		      <Btn primary>primary button</Btn>
		      <Btn primary loading>primary button</Btn>
		    </div>
		    <div class="column">
		      <Btn link>link button</Btn>
		      <Btn link loading>link button</Btn>
		    </div>
		  </div>
</Showyourcode>
	
	  <!-- button size -->
	  <header class="text-center"><h5>button sizes</h5></header>

<Showyourcode>
	  <div class="columns">
	      <div class="column">
	          <Btn size="lg">large button</Btn>
	          <Btn>normal button</Btn>
	          <Btn size="sm">small button</Btn>
	      </div>
	      <div class="column">
	          <Btn block>block button</Btn>
	      </div>
	  </div>
</Showyourcode>

	  <section class="notes">
	      <p>Add the class <code>btn-sm</code> or <code>btn-lg</code> for small or large button size. Also, you can add the class <code>btn-block</code> for a full-width button. </p>
	  </section>

<Showyourcode>
	  <div class="columns">
	      <div class="column">
	          <Btn primary size="lg" icon="shoucang">Icon large</Btn>
	          <Btn primary icon="faxian2">Icon large</Btn>
	          <Btn primary size="sm" icon="twitter0">Icon large</Btn>
	      </div>
	  </div>
</Showyourcode>

	  <section class="notes">
	      <p>Icons with the class <code>icon</code> can be correctly rendered in each button size. </p>
	  </section>

	  
	  <header class="text-center"><h5>button groups</h5></header>

<Showyourcode>
	  <div class="columns">
	      <div class="column">
	        <btn-group>
	          <Btn>first button</Btn>
	          <Btn>second button</Btn>
	          <Btn>third button</Btn>
	        </btn-group>
	      </div>
	      <div class="column">
	        <btn-group block>
	          <Btn primary>first button</Btn>
	          <Btn primary>second button</Btn>
	          <Btn primary>third button</Btn>
	        </btn-group>
	      </div>
	  </div>
</Showyourcode>

<Showyourcode>
	  <div class="columns">
	      <div class="column">
	        <btn-group block>
	          <Btn size="sm">first button</Btn>
	          <Btn size="sm">second button</Btn>
	          <Btn size="sm">third button</Btn>
	        </btn-group>
	      </div>
	  </div>
</Showyourcode>

	  <section class="notes">
	      <p>If you want to use buttons as a group, add the class <code>btn-group</code> to the container. You can add the class <code>btn-group-block</code> for a full-width button group.</p>
	  </section>
	</section>
</template>