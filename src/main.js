import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import ElementUI from 'element-ui'
import './styles/element-variables.scss'
import * as filters from './filters'

// 全局注册过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.use(ElementUI, { size: 'small' })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
