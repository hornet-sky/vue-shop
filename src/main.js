import Vue from 'vue' // 在webpack配置文件里声明了别名'vue$' --> 'vue/dist/vue.esm.js'
import App from './App.vue' // vue-loader会解析App.vue文件，最终返回一个复杂对象
import router from './router'
import './mock/mockServer.js'
import './filters'
// import { Header, Button, Swipe, SwipeItem, InfiniteScroll, Navbar, TabItem } from 'mint-ui'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import mui from './lib/mui/js/mui.min.js'
Vue.prototype.common = { mui } // 把mui函数放到全局，便于各个模块共用

import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(Mint)

import store from './store'

/*
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.use(InfiniteScroll)
*/

import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

new Vue({
  el: '#app',
  router,
  store,
  render: createElements => createElements(App)
})