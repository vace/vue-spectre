<template>
	<section id="autocomplete" class="container grid-960">
	    <header class="text-center"><h4>autocomplete</h4></header>
	    <section class="notes">
	        <p><strong>Autocomplete</strong> form component provides suggestions while you type. It is often used for tags and contacts input. </p>
	    </section>
	    <div class="columns">
	        <div class="column col-6">
<Showyourcode>
<div>
	            <div class="form-group">
	                <auto-complete 
	                	:data="datas1" 
	                	:value.sync="value"
	                	@submit="submitData1"
	                	@close="closeData1"
	                	placeholder="enter">
	                </auto-complete>
	            </div>
</div>
</Showyourcode>

<Showyourcode>
<div>
	            <div class="form-group">
	                <auto-complete 
	                	:data="datas2" 
	                	:value.sync="value"
	                	@submit="submitData2"
	                	@close="closeData2"
	                	placeholder="enter">
	                </auto-complete>
	            </div>
</div>
</Showyourcode>
	        </div>
	        <div class="column col-6">

<Showyourcode>
<div class="pre-b-c">
	            <div class="form-group">
	            	<auto-complete 
	            		:data="datas3" 
	            		:list="list1 | filterBy value in 'name'"
	            		:value.sync="value"
	            		@submit="submitData3"
	            		@close="closeData3"
	            		@filter="filterClick"
	            		placeholder="enter">
	            	</auto-complete>
	            </div>
</div>
</Showyourcode>

	        </div>
	    </div>
	    <section class="notes">
	        <p>Add a container element with the class <code>form-autocomplete</code>. There are 2 parts of it, one is  <code>form-autocomplete-input</code>, another is <code>form-autocomplete-list</code>. Spectre.css does not include JavaScript code, you will need to implement your JS to interact with the autocomplete. The autocomplete HTML structure is exampled below. </p>
	    </section>
	</section>
</template>

<script>
	import logo from '../assets/logo.png'
	import avatar1 from '../assets/avatar-1.png'
	import avatar2 from '../assets/avatar-2.png'

	export default {
		data(){
			return {
				logo,avatar1,avatar2,
				datas1:[
					{avatar:avatar2,name:'Tony Stark'},
					{avatar:avatar1,name:'Thor Odinson'},
					{avatar:avatar2,name:'Steve Rogers'},
					{avatar:avatar1,name:'Bruce Banner'},
					{avatar:avatar2,name:'Natasha Romanoff',selected:true}
				],
				datas2:[
					'Tony Stark','Thor Odinson','Steve Rogers','Bruce Banner'
				],
				datas3:[
					{avatar:avatar1,name:'Thor Odinson'},
					{avatar:avatar2,name:'Steve Rogers'},
					{avatar:avatar2,name:'Natasha Romanoff',selected:true}
				],
				list1:[
					{avatar:avatar2,name:'Tony Stark'},
					{avatar:avatar1,name:'Thor Odinson'},
					{avatar:avatar2,name:'Steve Rogers'},
					{avatar:avatar1,name:'Bruce Banner'}
				],
				
				value:''
			}
		},
		methods:{
			submitData1(value){
				if (value){
					this.datas1.push({
						avatar:Math.random() < 0.5 ? logo : avatar1,
						name:value
					})
					this.value = ''
				}
			},
			submitData2(value){
				if (value){
					this.datas2.push(value)
					this.value = ''
				}
			},
			submitData3(value){
				if (value){
					this.datas3.push(value)
					this.value = ''
				}
			},
			closeData1(index){
				this.datas1.splice(index, 1)
			},
			closeData2(index){
				this.datas2.splice(index, 1)
			},
			filterClick(value,index){
				this.list1.splice(index,1)
				this.datas3.push(value)
			},
			closeData3(index){
				this.datas3.splice(index, 1)
			}
		}
	}
</script>
<style>
	.pre-b-c + .example{
		margin-top:260px;
	}
</style>