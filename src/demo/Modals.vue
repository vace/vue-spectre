<template>
	<section id="modals" class="container grid-960">
	    <header class="text-center"><h4>modals</h4></header>
	    <section class="notes">
	        <p><strong>Modals</strong> are flexible dialog prompts.</p>
	    </section>

<Showyourcode>
<div>
	    <!-- Modal 1 -->
	    <Modal 
	    	title="Modal title" 
	    	:show.sync="modal1" 
	    	@submit="debuginfo('submit click')" 
	    	@close="debuginfo('closed')"
	    >
	    	<div><p>This is the content inside the modal.</p></div>
	    </Modal>


	    <!-- Modal 2 -->
	    <Modal 
	    	title="Modal title2" 
	    	:overlay="false" 
	    	:show.sync="modal2"
	    	submit-text="提交答案"
	    	cancel-text="关闭弹窗"
	    	@submit="debuginfo('submit click')" 
	    	@close="debuginfo('closed')"
	    >
	    	<div><p>overlay="false" This is the content inside the modal.</p></div>
	    </Modal>

	    <!-- action -->
	    <div class="columns">
	        <div class="column">
	        	<Btn @click="modal1=true" type="primary">Open Modal1</Btn>
	        	<Btn @click="modal2=true" type="primary">Open Modal2</Btn>
	        </div>
	    </div>
</div>
</Showyourcode>

	    <section class="notes">
	        <p>Add a container element with the class <code>modal</code>. And add a real container <code>modal-container</code> and overlay <code>modal-overlay</code> inside it. You can add child elements with the class name <code>modal-header</code>, <code>modal-content</code> and <code>modal-footer</code> - any or all of them. </p>
	        <p>Spectre.css does not include JavaScript code, you will need to implement your JS to interact with modals. To make a modal appear, add the class <code>active</code> to the <code>modal</code> container</p>
	    </section>





	    <header class="text-center"><h5>modal sizes</h5></header>

<div>
<Showyourcode>
	    <div class="columns">
	    	<Modal 
	    		title="Modal title3" 
	    		icon="github"
	    		size="sm"
	    		:show.sync="modal3"
	    		@close="debuginfo('closed')"
	    	>
	    		<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
	    		<div slot="footer">
	    			<button @click="modal3=false" class="btn btn-link">Close</button>
	    			<button class="btn btn-primary">Share</button>
	    			<button class="btn btn-primary">Save</button>
	    		</div>
	    	</Modal>

	    	<Modal title="Modal title4" icon="github" size="sm" :show.sync="modal4">
	    		<form>
	    		    <xgroup label="Name" :model.sync="username" placeholder="Name" danger>
	    		    </xgroup>
	    		    <xgroup label="Gender">
	    		    	<xradio name="gender2" :model.sync="sex" value="1">Male</xradio>
	    		    	<xradio name="gender2" :model.sync="sex" value="2">Female</xradio>
	    		    </xgroup>
	    		</form>
	    		<div slot="footer">
	    			<button @click="modal4=false" class="btn btn-link">Close</button>
	    			<button class="btn btn-primary">Share</button>
	    			<button class="btn btn-primary">Save</button>
	    		</div>
	    	</Modal>

	        <div class="column">
	            <Btn @click="modal3=true">Open Custom Alert</Btn>
	        </div>
	        <div class="column">
	            <Btn @click="modal4=true">Open Custom Form</Btn>
	        </div>
	    </div>
</Showyourcode>
	    <section class="notes">
	        <p>Add the class <code>modal-sm</code> for a smaller modal dialog. </p>
	    </section>
	</section>
</template>

<script>
	export default {
		data(){
			return {
				modal1:false,
				modal2:false,
				modal3:false,
				modal4:false,
				username:'',
				sex:2
			}
		},
		methods:{
			debuginfo(msg){
				console.log(msg)
			}
		}
	}
</script>