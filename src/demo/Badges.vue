<template>
	<section id="badges" class="container grid-960">
	    <header class="text-center"><h4>badges</h4></header>
	    <section class="notes">
	        <p><strong>Badges</strong> are often used as unread number indicators.</p>
	    </section>

<Showyourcode>
<div>
	    <columns>
	        <column flex>
	            <span v-badge="num1">Notifications</span>
	        </column>
	        <column flex>
	            <span v-badge="num2">Notifications</span>
	        </column>
	        <column flex>
	            <span v-badge="num3">Notifications</span>
	        </column>
	        <column flex>
	            <span v-badge="num4">Notifications</span>
	        </column>
	    </columns>
</div>
</Showyourcode>

<Showyourcode>
<div>
	    <columns>
	        <column flex>
	        	<badge :data="num1">Notifications</badge>
	        </column>
	        <column flex>
	            <badge :data="num2">Notifications</badge>
	        </column>
	        <column flex>
	            <badge :data="num3">Notifications</badge>
	        </column>
	        <column flex>
	            <badge :data="num4">Notifications</badge>
	        </column>
	    </columns>
</div>
</Showyourcode>

	    <section class="notes">
	        <p>Add the class <code>badge</code> to non self closing elements. And add the attribute <code>data-badge</code> to define the content of a badge. The badge will appear in the top-right direction of the element.</p>
	    </section>
    </section>
</template>
<script>
	export default{
		data(){
			return {
				num1:283,
				num2:99,
				num3:8,
				num4:'♀'
			}
		}
	}
</script>