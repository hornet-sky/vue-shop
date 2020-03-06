import Vue from 'vue'
// 底部导航菜单组件
import Router from 'vue-router'
import MSite from '../views/bottom-tabbar/MSite.vue'
import Cart from '../views/bottom-tabbar/Cart.vue'
import Members from '../views/bottom-tabbar/Members.vue'
import Search from '../views/bottom-tabbar/Search.vue'
// 首页九宫格菜单组件
import NewsList from '../views/grid-9/NewsList.vue'
import NewsDetail from '../views/grid-9/NewsDetail.vue'

Vue.use(Router) // 提供 router-link、router-view 等标签

export default new Router({
  routes: [
    { path: '/msite', component: MSite, meta: { title: '首页' } },
    { path: '/cart', component: Cart, meta: { title: '购物车' } },
    { path: '/members', component: Members, meta: { title: '会员' } },
    { path: '/search', component: Search, meta: { title: '搜索' } },
    { path: '/', redirect: '/msite' },
    { path: '/news', component: NewsList, meta: { title: '新闻资讯' } },
    { path: '/news/:id', component: NewsDetail, meta: { title: '新闻详情' } }
  ],
  linkActiveClass: 'mui-active' // 用'mui-active' 替换默认的 'router-link-active'
})