<template>
	<section class="container grid-960">
		<header id="tabs" class="text-center"><h5>tabs</h5></header>

<Showyourcode>
		<div class="columns">
		    <div class="column">
				<tabs>
					<tab header="Music"><p>music content</p></tab>
					<tab :header="playlists" active>
						<p>{{playlists}} content <Btn @click="playlists+='wo'">edit</Btn></p>
					</tab>
					<tab header="Radio">
						<p>Radio content <Btn>delete this tab</Btn></p>
					</tab>
					<tab header="Github" icon="github" href="http://github.com">
						<p>Github content</p>
					</tab>
				</tabs>
		    </div>

		    <div class="column">
		    	<tabs block effect="fadein">
					<tab header="Index" icon="shouye"><p>Index content</p></tab>
					<tab header="Playlists"><p>Playlists content</p></tab>
					<tab header="Radio" active><p>Radio content</p></tab>
					<tab header="Github"><p>Github content</p></tab>
		    	</tabs>
		    </div>
		</div>
</Showyourcode>

		<section class="notes">
		    <p>Add a container element with the class <code>tab</code>. And add child elements with the classname <code>tab-item</code>. You can add the class <code>tab-block</code> for a full-width tab.</p>
		</section>



<Showyourcode>
		<div class="columns">
		    <div class="column">
		    	<tabs>
		    		<tab header="Music" :badge="badge">
		    			<p>music content <Btn @click="badge++">Add badge +1</Btn></p>
		    		</tab>
		    		<tab header="Playlists"><p>Playlists content</p></tab>
		    		<tab header="Radio"><p>Radio content</p></tab>
		    		<tab header="Github" icon="github">
		    			<p>Github content</p>
		    		</tab>
		    	</tabs>
		    </div>
		    <div class="column">
		        <tabs block>
		        	<tab header="Music" badge="9" icon="shouye"><p>music content</p></tab>
		        	<tab header="Playlists" badge="0"><p>Playlists content</p></tab>
		        	<tab header="Radio" active><p>Radio content</p></tab>
		        	<tab header="Github" icon="github" href="http://github.com">
		        		<p>Github content</p>
		        	</tab>
		        </tabs>
		    </div>
		</div>
</Showyourcode>

		<section class="notes">
		    <p>If you need <code>badges</code> on tabs, you can add badge class to the element within <code>tab-item</code>. </p>
		</section>
	</section>
</template>
<script>
	export default {
		data(){
			return {
				str1:'Header1',
				str2:'Music2',
				playlists:'playlists',
				badge:10
			}
		}
	}
</script>