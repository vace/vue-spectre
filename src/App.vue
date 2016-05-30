<template>
  <demo-menu></demo-menu>
  <overview></overview>
  <start></start>

  <section class="section">
    <buttons></buttons>
    <forms></forms>
    <flexbox></flexbox>
    <navbars></navbars>
    <emptys></emptys>
    <avatars></avatars>
    <chips></chips>
    <autocompletes></autocompletes>
    <tooltips></tooltips>
    <labels></labels>
    <badges></badges>
    <toasts></toasts>
    <menus></menus>
    <breadcrumbs></breadcrumbs>
    <tabs-demo></tabs-demo>
    <paginations></paginations>
    <modals></modals>
    <cards></cards>
  </section>

</template>

<script>
  import {vtooltip,vbage} from './directive/index'
  import * as components from './index.js'
  import Vue from 'vue'
  Object.keys(components).forEach(name => Vue.component(name,components[name]))

  Vue.directive('tooltip',vtooltip)

  Vue.directive('badge',vbage)

  import DemoMenu from './demo/DemoMenu.vue'
  import Overview from './demo/Overview.vue'
  import Start from './demo/Start.vue'


  import Buttons from './demo/Buttons.vue'
  import Flexbox from './demo/Flexbox.vue'
  import Navbars from './demo/Navbars.vue'
  import Emptys from './demo/Emptys.vue'
  import Avatars from './demo/Avatars.vue'
  import Chips from './demo/Chips.vue'
  import Autocompletes from './demo/Autocompletes.vue'
  import Tooltips from './demo/Tooltips.vue'
  import Labels from './demo/Labels.vue'
  import Badges from './demo/Badges.vue'
  import Toasts from './demo/Toasts.vue'
  import Menus from './demo/Menus.vue'
  import Breadcrumbs from './demo/Breadcrumbs'
  import TabsDemo from './demo/Tabs'
  import Paginations from './demo/Paginations'
  import Modals from './demo/Modals'
  import Cards from './demo/Cards'
  import Forms from './demo/Forms'

  import Showyourcode from './demo/Showyourcode'

  import './assets/demo.css'

  Vue.component('Showyourcode',Showyourcode)

  export default {
    components:{
      Overview,Start,DemoMenu,

      Buttons,Flexbox,Navbars,Emptys,Avatars,Chips,Autocompletes,Tooltips,
      Labels,Badges,Toasts,Menus,Breadcrumbs,TabsDemo,Paginations,Modals,
      Cards,Forms
    }
  }

</script>