import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入axios和vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// 自定义字体图标库
import '@/assets/css/myicons.css'
// 引入全局样式
import '@/assets/css/icomoon.css'
import '@/assets/css/style.css'

// 注册vue-axios
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
