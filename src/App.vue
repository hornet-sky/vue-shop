<template>
  <div>
    <mt-header fixed :title="titles[$route.meta.idx]">
      <router-link to="/" slot="left" v-show="$route.meta.idx > 0">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <router-view></router-view>
    <bottom-tabbar></bottom-tabbar>
  </div>
</template>

<script>
import BottomTabbar from "./components/BottomTabbar.vue";
export default {
  name: 'App',
  data () {
    return {
      titles: ['首页', '消息', '通讯录', '设置']
    }
  },
  methods: {
    
  },
  components: { BottomTabbar }
}
</script>

<style scoped>
  div {
    padding: 40px 0 50px 0;
  }
</style>