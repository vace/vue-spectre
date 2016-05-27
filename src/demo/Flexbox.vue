<template>
	<section id="grid" class="container grid-960">
		<header class="text-center"><h4>flexbox grid</h4></header>
		<section class="notes">
		    <p><strong>Layout</strong> includes flexbox based responsive grid system with 12 columns. </p>
		</section>

<Showyourcode>
<div>
		<Columns class="user-class" id="hello-user-id">
			<Column flex v-for="n in 12">
		        <div class="bg-grey">col-{{n}}</div>
		    </Column>
		</Columns>
</div>
</Showyourcode>

<Showyourcode>
<div>
		<Columns>
			<Column flex col="12">
				<div class="bg-grey">col-12 (100%)</div>
			</Column>
		</Columns>

		<Columns>
			<Column flex col="9">
				<div class="bg-grey">col-9 (100%)</div>
			</Column>
		</Columns>

		<Columns>
			<Column flex col="6">
				<div class="bg-grey">col-6 (100%)</div>
			</Column>
		</Columns>

		<Columns>
			<Column flex col=3>
				<div class="bg-grey">col-3 (100%)</div>
			</Column>
		</Columns>
</div>
</Showyourcode>

		<section class="notes">
		    <p>Add the class <code>columns</code> to a container with the class <code>container</code>. And add any element you want with classname <code>column</code> inside the container. These columns will take up the space equally. You can specific the width of each column by adding class <code>col-[1-12]</code>.</p>
		</section>





		<!-- flex box -->
		<header class="text-center"><h4>responsive grid</h4></header>

<div>
<Showyourcode>
		<Columns>
			<Column flex col="md-6">
				<div class="bg-grey">col-md-6</div>
			</Column>
			<Column flex col="md-3">
				<div class="bg-grey">col-md-3</div>
			</Column>
			<Column flex col="md-3">
				<div class="bg-grey">col-md-3</div>
			</Column>
		</Columns>
</div>
</Showyourcode>

<Showyourcode>
<div>
		<Columns>
			<Column flex col="sm-6">
				<div class="bg-grey">col-sm-6</div>
			</Column>
			<Column flex col="sm-3">
				<div class="bg-grey">col-sm-3</div>
			</Column>
			<Column flex col="sm-3">
				<div class="bg-grey">col-sm-3</div>
			</Column>
		</Columns>
</div>
</Showyourcode>


<Showyourcode>
<div>
		<Columns>
			<Column flex col="xs-6">
				<div class="bg-grey">col-xs-6</div>
			</Column>
			<Column flex col="xs-3">
				<div class="bg-grey">col-xs-3</div>
			</Column>
			<Column flex col="xs-3">
				<div class="bg-grey">col-xs-3</div>
			</Column>
		</Columns>
</div>
</Showyourcode>

		<section class="notes">
		    <p>Spectre provides a neat responsive layout grid system. There are <code>.col-xs-[1-12]</code>, <code>.col-sm-[1-12]</code> and <code>.col-md-[1-12]</code> available for flexible grid across mobile, tablet and desktop viewport usage.</p>
		    <ul>
		        <li>For window width less than <strong>480px</strong>, all columns will show as a single row.</li>
		        <li><code>col-xs-[1-12]</code> apply to window width greater than or equal to <strong>481px</strong>. </li>
		        <li><code>col-sm-[1-12]</code> apply to window width greater than or equal to <strong>601px</strong>. </li>
		        <li><code>col-md-[1-12]</code> apply to window width greater than or equal to <strong>841px</strong>. </li>
		    </ul>
		</section>
		
<Showyourcode>
<div>
		<Columns>
			<Column flex col="2" hide="xs">
				<div class="bg-grey">hide-xs</div>
			</Column>
			<Column flex col="2" hide="sm">
				<div class="bg-grey">hide-sm</div>
			</Column>
			<Column flex col="2" hide="md">
				<div class="bg-grey">hide-md</div>
			</Column>
			<Column flex col="2" hide="lg">
				<div class="bg-grey">hide-lg</div>
			</Column>
			<Column flex col="2" hide="xl">
				<div class="bg-grey">hide-xl</div>
			</Column>
		</Columns>
</div>
</Showyourcode>


		<section class="notes">
		    <p>For hiding elements on specific viewport sizes, there are classes <code>.hide-xs</code>, <code>.hide-sm</code>, <code>.hide-md</code>, <code>.hide-lg</code> and <code>.hide-xl</code> available.</p>
		    <ul>
		        <li><code>hide-xs</code> hides elements when the viewport is smaller than or equal to <strong>480px</strong>. </li>
		        <li><code>hide-sm</code> hides elements when the viewport is smaller than or equal to <strong>600px</strong>. </li>
		        <li><code>hide-md</code> hides elements when the viewport is smaller than or equal to <strong>840px</strong>. </li>
		        <li><code>hide-lg</code> hides elements when the viewport is smaller than or equal to <strong>960px</strong>. </li>
		        <li><code>hide-xl</code> hides elements when the viewport is smaller than or equal to <strong>1280px</strong>. </li>
		    </ul>
		    <p>Spectre also has a responsive web test tool Responsive Resizer. You can use it locally in the directory <code>/tools/resizer</code> or online.</p>
		    <p><a href="http://picturepan2.github.io/spectre/tools/resizer/" target="_blank" class="btn btn-primary">Responsive Resizer</a></p>
		</section>

		
	</section>
</template>