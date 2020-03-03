<template>
  <nav class="mui-bar mui-bar-tab">
    <router-link tag="a" class="mui-tab-item" to="/msite" :class="{'mui-active': $route.path == '/msite'}">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link tag="a" class="mui-tab-item" to="/message" :class="{'mui-active': $route.path == '/message'}">
      <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
      <span class="mui-tab-label">消息</span>
    </router-link>
    <router-link tag="a" class="mui-tab-item" to="/address_book" :class="{'mui-active': $route.path == '/address_book'}">
      <span class="mui-icon mui-icon-contact"></span>
      <span class="mui-tab-label">通讯录</span>
    </router-link>
    <router-link tag="a" class="mui-tab-item" to="/settings" :class="{'mui-active': $route.path == '/settings'}">
      <span class="mui-icon mui-icon-gear"></span>
      <span class="mui-tab-label">设置</span>
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