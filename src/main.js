import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import echarts from 'echarts'
import 'geohey-javascript-sdk/dist/lib/g.css'
import G from 'geohey-javascript-sdk'
import 'geohey-javascript-sdk/dist/lib/g-canvas.min.js'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.prototype.$G = G
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
