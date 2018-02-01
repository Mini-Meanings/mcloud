// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import BaiduMap from 'vue-baidu-map'
import './assets/styles/element-variables.scss'
import './assets/styles/base.less'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(BaiduMap, {ak: 'YOUR_APP_KEY'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
