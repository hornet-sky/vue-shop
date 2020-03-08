<template>
  <div id="app">
    <mt-header fixed :title="$route.meta.title">
      <a @click.prevent="$router.back()" slot="left" v-show="$route.meta.title != '首页'" href="javascript:void(0)">
        <mt-button icon="back">返回</mt-button>
      </a>
    </mt-header>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <bottom-tabbar></bottom-tabbar>
  </div>
</template>

<script>
import BottomTabbar from "./components/BottomTabbar.vue";
export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  methods: {
    
  },
  components: { BottomTabbar }
}
</script>

<style scoped>
  #app {
    padding: 40px 0 50px 0;
    background-color: #fff; 
  }
  .v-enter-active, .v-leave-active {
    transition: all .3s ease;
  }
  .v-enter {
    opacity: 0;
    transform: translateX(100%)
  }
  .v-leave-to {
    position: absolute;
    opacity: 0;
    transform: translateX(-100%)
  }
</style>