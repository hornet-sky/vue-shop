<template>
  <div>
    <mt-header fixed title="首页"></mt-header>
    

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
  div {
    padding: 40px 0 50px 0;
  }
</style>