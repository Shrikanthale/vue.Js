import Vue from 'vue'
import App from './App.vue'
import store from './Store'
import Globalcomponent from './components/LocalAndGlobalComponent/Globalcomponent.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('Globalcomponent',Globalcomponent)
// Vue.directive("size",{
//   bind(e1){
//     e1.style.fontSize="100px";
//   }
// })
Vue.config.productionTip = false
// vue.filter("Ucase",function(val){
//   return val.toUpperCase()
// })

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
