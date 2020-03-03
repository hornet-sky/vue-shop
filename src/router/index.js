import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../views/MSite.vue'
import Cart from '../views/Cart.vue'
import Members from '../views/Members.vue'
import Search from '../views/Search.vue'

Vue.use(Router) // 提供 router-link、router-view 等标签

export default new Router({
  routes: [
    { path: '/msite', component: MSite, meta: { idx: 0 } },
    { path: '/cart', component: Cart, meta: { idx: 1 } },
    { path: '/members', component: Members, meta: { idx: 2 } },
    { path: '/search', component: Search, meta: { idx: 3 } },
    { path: '/', redirect: '/msite' }
  ]
})