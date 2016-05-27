<template>
	<ul class="pagination">
	    <li class="page-item" 
	    	:class="{active:p.active}" 
	    	@click="change(p)"
	    	v-for="p in pages"
	    >
	        <a href="javascript:;" :class="{disabled:p.disabled}">
	            {{ p.text }}
	        </a>
	    </li>
	</ul>
</template>
<script>

	function gen(text,disabled,active,page){
		return {text,disabled,active,page}
	}
	export default {
		props:{
			// type false => hide Prev
			prev:{
				type:[String,Boolean],
				default:'Previous'
			},
			next:{
				type:[String,Boolean],
				default:'Next'
			},
			total:{
				type:Number,
				coerce:function(val){ return +val },
				default:0
			},
			current:{
				type:Number,
				coerce:function(val){ return +val > 0 ? +val : 1 },
				default:1
			},
			view:{
				type:Number,
				coerce:function(val){ return +val },
				default:5
			},
			more:{
				type:[Boolean,String],
				default:'...'
			},
			step:{
				type:Number,
				coerce:function(val){ return +val > 0 ? +val : 2 },
				default:5
			}
		},
		methods:{
			change:function(page){
				if (!page.disabled){
					this.current = page.page
					this.$dispatch('change',page.page)
				}
			}
		},
		computed:{
			pages(){
				var {prev,next,total,current,view,more,step} = this
				var config = []
				if (total <= 1){
					return config
				}
				// prev
				if (prev !== false){
					config.push(gen(prev,current <= 1,false,current - 1))
				}
				if (view > 0){
					// page first
					config.push(gen(1,false,current === 1,1))

					var left = Math.floor(view / 2)
					var right = view - left
					var page = 0
					var i

					if (current - left < 1){
						right = right + left - current + 1
					}
					if (current + right > total - 1){
						left = left + current + right - total
					}
					// left  > 0,
					if (current - left > 2 && more !== false){
						page = current - step
						config.push(gen(more,false,false, page > 0 ? page : 1))
					}

					// left pages
					for (i = left; i > 0; i--){
						page = current - i 
						if (page > 1){
							config.push(gen(page,false,false,page))
						}
					}
					// curent page
					if (current !== 1 && current !== total){
						config.push(gen(current, false,true,current))
					}
					
					// right pages
					for (i = 0; i < right; i++){
						page = current + i + 1
						if (page < total){
							config.push(gen(page,false,false,page))
						}
					}
					if (current + right < total - 1 && more !== false){
						page = current + step
						config.push(gen(more,false,false,page > total ? total : page))
					}
					// page last
					config.push(gen(total,false,current === total,total))
				}

				// next
				if (next !== false){	
					config.push(gen(next,current >= total,false,current + 1))
				}
				return config
			}
		}
	}

</script>