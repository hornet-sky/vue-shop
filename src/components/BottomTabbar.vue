<template>
  <nav class="mui-bar mui-bar-tab">
    <router-link tag="a" class="mui-tab-item2" to="/msite">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link tag="a" class="mui-tab-item2" to="/cart">
      <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
      <span class="mui-tab-label">购物车</span>
    </router-link>
    <router-link tag="a" class="mui-tab-item2" to="/members">
      <span class="mui-icon mui-icon-contact"></span>
      <span class="mui-tab-label">会员</span>
    </router-link>
    <router-link tag="a" class="mui-tab-item2" to="/search">
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
.mui-bar-tab .mui-tab-item2
{
    display: table-cell;
    overflow: hidden;

    width: 1%;
    height: 50px;

    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;

    color: #929292;
}
.mui-bar-tab .mui-tab-item2.mui-active
{
    color: #007aff;
}
.mui-bar-tab .mui-tab-item2 .mui-icon
{
    top: 3px;

    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item2 .mui-icon ~ .mui-tab-label
{
    font-size: 11px;

    display: block;
    overflow: hidden;

    text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item2 .mui-icon:active
{
    background: none;
}
</style>