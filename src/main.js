import Vue from 'vue';
import App from './App.vue';

import wysiwyg from "./editor";

Vue.use(wysiwyg, {
  hideModules: {
    bold: false,
  },
  locale: 'zh'
});

new Vue({
  el: '#app',
  render: h => h(App)
})
