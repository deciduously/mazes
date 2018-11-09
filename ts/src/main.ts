import vue from 'vue';
import AppVue from './App.vue';

new vue({
  el: '#app',
  render: h => h(AppVue, {}),
});