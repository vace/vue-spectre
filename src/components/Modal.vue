<template>
	<div :class="[{active:show},'modal',size && 'modal-'+size]">
	    <div v-if="overlay" @click="closeOverlay" class="modal-overlay"></div>
	    <div class="modal-container">

			<div class="modal-header">
				<slot name="header">
				    <button v-if="clear" @click="close" class="btn btn-clear float-right"></button>
				    <div class="modal-title"><icon v-if="icon" :name="icon"></icon> {{ title }}</div>
				</slot>
			</div>

			<div class="modal-body">
		    	<slot name="body">
				    <div class="content">
						<slot></slot>
				    </div>
		    	</slot>	    
			</div>

	        <div class="modal-footer">
	        	<slot name="footer">
					<button @click="close" class="btn btn-link">{{ cancelText }}</button>
					<button @click="submitClick" class="btn btn-primary">{{ submitText }}</button>
	        	</slot>
	        </div>
	    </div>
	</div>
</template>
<script>
	export default {
		props:{
			title:{
				type:[String],
				default:''
			},
			size:{
				type:[String,Number],
				default:''
			},
			show:{
				require:true,
				type:Boolean,
				coerce:function(v){ return !!v },
				twoWay:true
			},
			icon:{
				type:String,
				default:''
			},
			clear:{
				type:Boolean,
				default:true
			},
			overlay:{
				type:Boolean,
				default:true
			},
			overlayClose:{
				type:Boolean,
				default:false
			},
			submitText:{
				type:String,
				default:'Submit'
			},
			cancelText:{
				type:String,
				default:'Cancel'
			}
		},
		methods:{
			submitClick(e){
				this.$dispatch('submit',e)
			},
			close(e){
				this.show = false
				this.$dispatch('close',e)
			},
			closeOverlay(e){
				if (this.overlayClose){
					this.close(e)
				}
			}
		}
	}
</script>