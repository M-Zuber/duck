import Vue from 'vue'
import SuiVue from 'semantic-ui-vue';
import Moment from 'vue-moment'
import VueRouter from 'vue-router'
import App from './App.vue'
import { data } from "@/store.js";

import 'semantic-ui-css/semantic.min.css';

Vue.use(SuiVue);
Vue.use(Moment);
Vue.use(VueRouter)

new Vue({
  data,
  router: new VueRouter({
    mode: 'history',
    routes: []
  }),
  render: h => h(App),
}).$mount('#app')
