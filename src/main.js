import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
// import locale from 'element-ui/lib/locale/lang/en'
import 'fullcalendar/dist/fullcalendar.min.css'
import '@/styles/index.scss' // global css
import App from './App'
import router from './router'
import store from './store'
import '@/icons' // icon
import '@/permission' // permission control

import axios from 'axios'

import FullCalendar from 'vue-full-calendar'

Vue.use(FullCalendar)

Vue.use(ElementUI)

// axios全局使用 ;

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'https://dev-plant.52store.net/admin'
//  默认接口地址
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
