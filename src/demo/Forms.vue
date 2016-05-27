<template>
	<section id="forms" class="container grid-960">
	    <header class="text-center"><h4>forms</h4></header>
	    <section class="notes">
	        <p><strong>Forms</strong> provide the most common control styles used in forms, including label, input, textarea, select, checkbox, radio and switch.  </p>
	        <p></p>
	    </section>
	    <div class="columns">
	        <div class="column col-6">

<Showyourcode>
	<div>
	            <xform>
	            	<xgroup label="Name" :model.sync="username" placeholder="Name" danger>
	            	</xgroup>
	            	<xgroup label="Email" :model.sync="email" placeholder="Email" success>
	            	</xgroup>
					<xgroup label="Gender">
						<xradio name="gender" :model.sync="sex" value="1">Male</xradio>
						<xradio name="gender" :model.sync="sex" value="2">Female</xradio>
					</xgroup>
					<xgroup label="Gender">
						<xradio name="gender2" :model.sync="sex" value="1">Male</xradio>
						<xradio name="gender2" :model.sync="sex" value="2">Female</xradio>
					</xgroup>
	                <xgroup>
	                	<xselect :data="xselect1" :model.sync="select1value"></xselect>
	                	<xselect :data="xselect2" :model.sync="select1value"></xselect>
	                </xgroup>
	                <xgroup>
	                	<xswitch :model.sync="switchSelect">Send me emails with news and tips</xswitch>
	                </xgroup>
	                <xgroup 
	                	label="Message" 
	                	type="textarea"
	                	:model.sync="content" 
	                	placeholder="Textarea"
	                	rows="3">
	                </xgroup>
					<xgroup>
						<xcheckbox :model.sync="switchSelect2">Remember me</xcheckbox>
					</xgroup>
					<xgroup>
						<button class="btn btn-primary" type="submit">Submit</button>
						<button class="btn btn-link" type="reset">Cancel</button>
					</xgroup>
				</xform>
	</div>
</Showyourcode>

	        </div>
	        <div class="column col-6">

<Showyourcode>
	<div>
	            <xform horizontal action="#forms">
	            	<xgroup danger>
	            		<column slot="label" col="sm-3">
	            			<xlabel>Name</xlabel>
	            		</column>
	            		<column col="sm-9">
	            			<xinput :model.sync="username" placeholder="Name" danger></xinput>
	            		</column>
	            	</xgroup>

	            	<xgroup success>
	            		<column slot="label" col="sm-3">
	            			<xlabel>Email</xlabel>
	            		</column>
	            		<column col="sm-9">
	            			<xinput :model.sync="email" placeholder="Email" success></xinput>
	            		</column>
	            	</xgroup>
	                
					<xgroup>
						<column slot="label" col="sm-3">
							<xlabel>Gender</xlabel>
						</column>
						<column col="sm-9">
							<xradio name="gender" :model.sync="sex" value="1">Male</xradio>
							<xradio name="gender" :model.sync="sex" value="2">Female</xradio>
						</column>
					</xgroup>

					<xgroup>
						<column slot="label" col="sm-3"></column>
						<column col="sm-9">
							<xselect :data="xselect1" :model.sync="select1value"></xselect>
							<xselect :data="xselect2" :model.sync="select1value"></xselect>
						</column>
					</xgroup>

					<xgroup>
						<column slot="label" col="sm-3"></column>
						<column col="sm-9">
							<xswitch :model.sync="switchSelect">Send me emails with news and tips</xswitch>
						</column>
					</xgroup>

					<xgroup>
						<column slot="label" col="sm-3">Message</column>
						<column col="sm-9">
							<xtextarea placeholder="Textare" :model.sync="content" row="3"></xtextarea>
						</column>
					</xgroup>
						
						
	                <xgroup>
	                	<column slot="label" col="sm-3">Message</column>
	                	<column col="sm-9">
	                		<xcheckbox :model.sync="switchSelect2">Remember me</xcheckbox>
	                	</column>
	                </xgroup>

	                <div class="form-group">
	                    <div class="col-sm-3"></div>
	                    <div class="col-sm-9">
	                        <button class="btn btn-primary" type="submit">Submit</button>
	                        <button class="btn btn-link" type="reset">Cancel</button>
	                    </div>
	                </div>
	            </xform>
	</div>
</Showyourcode>

	        </div>
	    </div>


	    <section class="notes">
	        <p>If you want to have a horizontal form, add the class <code>form-horizontal</code> to the &lt;form&gt; container. And add the class <code>col-[1-12]</code> to the child elements for form row layout. Please note <code>form-horizontal</code> only works in viewports that are at least 840px wide.</p>
	    </section>


	    <section class="notes">
	        <p>To use form validation styles, add <code>is-success</code> and <code>is-danger</code> to the controls or add <code>has-success</code> and <code>has-danger</code> to parent elements.</p>
	    </section>

	    <section class="notes">
	        <p>For smaller or larger input and select controls, you could add <code>input-sm</code>/<code>input-lg</code> and <code>select-sm</code>/<code>select-lg</code> to the elements.</p>
	    </section>


<Showyourcode>
	    <div class="columns">
	        <div class="column">
	        	<xinput size="sm" placeholder="Name" :model.sync="username"></xinput>
	        </div>
	        <div class="column">
	        	<xinput size="lg" placeholder="Name" :model.sync="username"></xinput>
	        </div>
	        <div class="column">
	            <xselect size="sm" :data="xselect1" :model.sync="select1value"></xselect>
	            <xselect size="lg" :data="xselect2" :model.sync="select1value"></xselect>
	        </div>
	    </div>
</Showyourcode>

	    <header class="text-center"><h5>input groups</h5></header>

<Showyourcode>
	    <div class="columns">
	        <div class="column">
	            <input-group 
	            	addon="User Name" 
	            	placeholder="Name" 
	            	btn="Submit"
	            	:model.sync="username"
	            	>
	            </input-group>
	        </div>
	        <div class="column">
	            <input-group>
	            	<input-addon>User Name</input-addon>
	            	<xinput placeholder="Name" :model.sync="username"></xinput>
	            </input-group>
	        </div>
	        <div class="column">
	        	<input-group>
	        		<input-addon>slack.com</input-addon>
	        		<xinput placeholder="Name" :model.sync="username"></xinput>
	        		<input-addon>slack.com</input-addon>
	        	</input-group>
	        </div>
	    </div>
</Showyourcode>

<Showyourcode>
	    <div class="columns">
	        <div class="column">
	        	<input-group>
	        		<input-addon size="sm">slack.com</input-addon>
	        		<xinput size="sm" placeholder="Name" :model.sync="username"></xinput>
	        		<input-addon size="sm">slack.com</input-addon>
	        	</input-group>
	        </div>
	        <div class="column">
	            <input-group>
	            	<input-addon size="lg">slack.com</input-addon>
	            	<xinput size="lg" placeholder="Name" :model.sync="username"></xinput>
	            	<input-addon size="lg">slack.com</input-addon>
	            </input-group>
	        </div>
	        <div class="column">

	        </div>
	    </div>
</Showyourcode>

	    <section class="notes">
	        <p>If you want to attach text and button along with an input, add the class <code>input-group</code> to the input container. And add the class <code>input-group-addon</code> to the text element and <code>input-group-btn</code> to the button element.</p>
	    </section>
    </section>
</template>
<script>

	export default {
		data(){
			return {
				username:'',
				password:'',
				tel:'',
				name:'',
				email:'',
				sex:2,
				content:'',
				xselect1:[
					'Choose an option','Slack','Skype','Hipchat'
				],
				select1value:'Slack',
				xselect2:[
					{'key':'Choose an option','text':'value1'},
					{'key':'Slack','text':'value2'},
					{'key':'Skype','text':'value3'},
					{'key':'Hipchat','text':'value4'}
				],
				switchSelect:true,
				switchSelect2:true
			}
		},
		components:{

		}
	}
</script>