<template>
  <div class="tab-pane"
      v-bind:class="{hide:!show}"
      v-show="show"
      :transition="effect"
      :data-config="config"
  >
    <slot></slot>
  </div>
</template>
<script>
	export default {
		props:{
			header:{
				type:String
			},
			active:{
				type:Boolean,
				default:false
			},
			href:{
				type:[Boolean,String],
				default:false
			},
			icon:{
				type:String,
				default:false
			},
			badge:{
				type:[String,Number],
				default:false
			}
			// disabled:{}
		},
		data(){
			return {
				index:0,
				show:false
			}
		},
		computed:{
			show(){
				return this.$parent.active_index === this.index
			},
			effect(){
				return this.$parent.effect
			},
			config(){
				// console.log(this)
				// some error
				if (typeof this !== 'undefined'){
					var {header,href,icon,badge,active} = this
					this.$parent.editTab(this.index,{header,href,icon,badge},active)
					return encodeURIComponent(JSON.stringify({header,href,icon,badge,active}))
				}
			}
		},
		created(){
			this.index = this.$parent.addTab(this.header,this.href,this.icon,this.badge,this.active)
		},
		beforeDestroy(){
			this.$parent.removeTab(this.index)
		}
	}
</script>