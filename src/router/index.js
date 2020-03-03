import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../views/MSite.vue'
import Message from '../views/Message.vue'
import AddressBook from '../views/AddressBook.vue'
import Settings from '../views/Settings.vue'

Vue.use(Router) // 提供 router-link、router-view 等标签

export default new Router({
  routes: [
    { path: '/msite', component: MSite, meta: { idx: 0 } },
    { path: '/message', component: Message, meta: { idx: 1 } },
    { path: '/address_book', component: AddressBook, meta: { idx: 2 } },
    { path: '/settings', component: Settings, meta: { idx: 3 } },
    { path: '/', redirect: '/msite' }
  ]
})