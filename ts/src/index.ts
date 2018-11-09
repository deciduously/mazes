import Vue from 'vue';
import AppComponent from './components/App.vue';

const v = new Vue({
  el: '#app',
  template: `
    <app-component></app-component>
  `,
  data: {},
  components: {
    AppComponent,
  },
});