import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import APlayer from '@moefe/vue-aplayer';



Vue.use(APlayer);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});