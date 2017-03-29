import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';             // 使用 iview
import 'iview/dist/styles/iview.css';  // 使用 iview CSS
import '@/my-theme/index.less';
// import '@/assets/css/ui.scss'
Vue.use(iView);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
