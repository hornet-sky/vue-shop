<template>
  <nav class="mui-bar mui-bar-tab">
    <router-link tag="a" class="mui-tab-item" to="/msite" :class="{'mui-active': $route.path == '/msite'}">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link tag="a" class="mui-tab-item" to="/cart" :class="{'mui-active': $route.path == '/cart'}">
      <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
      <span class="mui-tab-label">购物车</span>
    </router-link>
    <router-link tag="a" class="mui-tab-item" to="/members" :class="{'mui-active': $route.path == '/members'}">
      <span class="mui-icon mui-icon-contact"></span>
      <span class="mui-tab-label">会员</span>
    </router-link>
    <router-link tag="a" class="mui-tab-item" to="/search" :class="{'mui-active': $route.path == '/search'}">
      <span class="mui-icon mui-icon-search"></span>
      <span class="mui-tab-label">搜索</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'BottomTabbar'
}
</script>

<style scoped>

</style>