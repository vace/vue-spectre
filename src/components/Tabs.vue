<template>
	<div class="tabs-container">
		<ul class="tab" :class="{'tab-block':block}">
		    <li class="tab-item" 
		    	:class="{active:$index == active_index}"
		    	@click="this.active_index = $index"
		    	v-for="d in render_datas"
		    >
		        <a 
		        	:href="d.href || 'javascript:;'" 
		        	:class="{badge:d.badge!==false}" 
		        	:data-badge="d.badge"
		        >
					<icon v-if="d.icon" :name="d.icon"></icon>{{' '}}
		            {{ d.header }}
		        </a>
		    </li>
		</ul>
		<div class="tab-content">
			<slot></slot>
		</div>
	</div>
</template>
<script>
	export default {
		props:{
			block:{
				type:Boolean,
				default:false
			},
			effect:{
				type:String,
				default:'fadein'
			}
		},
		data(){
			return {
				render_datas:[],
				active_index:0
			}
		},
		methods:{
			addTab(header,href = false,icon = false,badge = false,active = false){
				var index = this.render_datas.push({header,href,icon,badge})
				if (index === 1){
					active = true
				}
				if (active){
					this.active_index = index - 1
				}
				return index - 1
			},
			editTab(index,conf = {},active = false){
				var config = this.render_datas[index]
				for (var x in conf){
					if (conf.hasOwnProperty(x)){
						if (conf[x] !== config[x]){
							config[x] = conf[x]
						}
					}
				}
				// this.render_datas.splice(index,1,conf)
			},
			removeTab(index){
				this.render_datas.splice(index,1)
			}
		}
	}
</script>