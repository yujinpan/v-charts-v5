import Vue from 'vue';

import App from './App';
import CodeSection from './components/code-section';
import router from './router';

Vue.component(CodeSection.name, CodeSection);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
});
