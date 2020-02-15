import Vue from 'vue'
import SuiVue from 'semantic-ui-vue';
import VueRouter from 'vue-router'
import App from './App.vue'

import 'semantic-ui-css/semantic.min.css';

Vue.use(SuiVue);
Vue.use(VueRouter)

new Vue({
  router: new VueRouter({
    mode: 'history',
    routes: []
  }),
  render: h => h(App),
}).$mount('#app')
