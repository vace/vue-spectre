<template>
	<section class="container grid-960" id="pagination">
		<header id="pagination" class="text-center"><h5>pagination</h5></header>
		<columns>
			<column flex>
				<div class="input-group">
				    <span class="input-group-addon">Total Page</span>
				    <input type="number" v-model="total" class="form-input" placeholder="Total Page" />
				</div>
			</column>
			<column flex>
				<div class="input-group">
				    <span class="input-group-addon">Current Page</span>
				    <input type="number" v-model="current" class="form-input" placeholder="Current Page" />
				</div>
			</column>
			<column flex>
				<div class="input-group">
				    <span class="input-group-addon">View Number</span>
				    <input type="number" v-model="view" class="form-input" placeholder="View Number" />
				</div>
			</column>
			<column flex>
				<div class="input-group">
				    <span class="input-group-addon">Step Number</span>
				    <input type="number" v-model="step" class="form-input" placeholder="View Number" />
				</div>
			</column>
		</columns>

<Showyourcode>
		<div class="columns">
		    <div class="column">
		        <paging 
		        	@change="changePage" 
		        	:total="total" 
		        	:current.sync="current"
		        	:step="step"
		        	:view="view">
		        </paging>
		    </div>
		    <div class="column">
		    	<paging 
		    		@change="changePage" 
		    		:total="total" 
		    		:current.sync="current" 
		    		:step="step"
		    		:view="view"
		    		prev="上一页"
		    		next="下一页"
		    		>
		    	</paging>
		    </div>
		</div>
</Showyourcode>

<Showyourcode>
		<div class="columns">
		    <div class="column">
		        <paging 
		        	@change="changePage" 
		        	:total="total" 
		        	:current.sync="current" 
		        	:prev="false"
		        	:next="false"
		        	:step="step"
		        	more="more"
		        	:view="view">
		        </paging>
		    </div>
		    <div class="column">
		    	<paging 
		    		@change="changePage" 
		    		:total="total" 
		    		:current.sync="current" 
		    		:step="step"
		    		:view="0"
		    		>
		    	</paging>
		    </div>
		</div>
</Showyourcode>

		<section class="notes">
		    <p>Add a container element with the class <code>pagination</code>. And add child elements with the classname <code>page-item</code>.</p>
		</section>
	</section>
	</section>
</template>
<script>
	export default {
		data(){
			return {
				total:108,
				current:1,
				view:3,
				step:4
			}
		},
		methods:{
			changePage(page){
				console.log('topage',page)
			}
		}
	}
</script>