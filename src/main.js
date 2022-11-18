/*!

 =========================================================
 * Air Control - Alpha
 =========================================================

 * @author
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'
import "vue-notifyjs/themes/default.css";
import VueMask from 'v-mask'
import VueFormWizard from 'vue-form-wizard'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// router setup
import routes from './routes/routes'
import store from './store'
import './registerServiceWorker'
// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)
Vue.use(VueMask);
Vue.use(VueFormWizard)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
