import Vue from 'vue' // 在webpack配置文件里声明了别名'vue$' --> 'vue/dist/vue.esm.js'
import App from './App.vue' // vue-loader会解析App.vue文件，最终返回一个复杂对象
import router from './router'

import './lib/mui/css/mui.min.css'
// import Mint from 'mint-ui'
// import 'mint-ui/lib/style.min.css'

import { Header } from 'mint-ui'

Vue.component(Header.name, Header)

new Vue({
  el: '#app',
  router,
  render: createElements => createElements(App)
})