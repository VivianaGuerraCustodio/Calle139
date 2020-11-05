import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
import './registerServiceWorker'
import EventBus from '@/plugins/event-bus'
Vue.use(EventBus)



new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');


