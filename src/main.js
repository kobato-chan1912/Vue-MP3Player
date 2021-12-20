import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import APlayer from '@moefe/vue-aplayer';
import VueRouter from 'vue-router';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// Component Import 

import home from './components/home.vue';
import playlist from './components/playlist.vue';
import notfound from './components/404.vue';
require('dotenv').config()

Vue.use(APlayer);
Vue.use(VueRouter);
Vue.use(VueSweetalert2);


Vue.config.productionTip = false;

const routes = [
  {path: "/", component: home},
  {path: "/playlist/:id", component: playlist},
  {path: "*", component: notfound},
]

const router = new VueRouter({
  mode: "history",
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>',
});