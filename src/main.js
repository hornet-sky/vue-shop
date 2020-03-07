import Vue from 'vue' // 在webpack配置文件里声明了别名'vue$' --> 'vue/dist/vue.esm.js'
import App from './App.vue' // vue-loader会解析App.vue文件，最终返回一个复杂对象
import router from './router'
import './mock/mockServer.js'
import './filters'
// import { Header, Button, Swipe, SwipeItem, InfiniteScroll, Navbar, TabItem } from 'mint-ui'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(Mint)

/*
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.use(InfiniteScroll)
*/

new Vue({
  el: '#app',
  router,
  render: createElements => createElements(App)
})