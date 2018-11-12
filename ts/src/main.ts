import Vue from 'vue';
import App from './App.vue';
import Grid from './maze/grid';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
