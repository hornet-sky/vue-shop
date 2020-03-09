<template>
  <div>
    <!-- 1、轮播图 -->
    <swiper :swipe-img-urls="swipeImgUrls" :widthFull="true" :heightFull="true"></swiper>
    <!-- 2、九宫格菜单 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item, idx) in grid9MenuItems" :key="idx">
        <router-link :to="item.to">
          <img :src="item.imgUrl">
          <div class="mui-media-body">{{ item.title }}</div>
        </router-link>
      </li>
    </ul> 
  </div>
</template>

<script>
import { reqSwipes, reqGrid9MenuItems } from '../../api'
import { MessageBox } from 'mint-ui'
import Swiper from '../../components/Swiper.vue'

export default {
  name: 'MSite',
  components: { Swiper },
  created () {
    // 1、从服务器端加载 轮播图
    reqSwipes(5)
      .then(urls => {
        this.swipeImgUrls = urls
      }, error => {
        console.log('error -->', error)
        MessageBox.alert(error.message, "错误信息");
      })

    // 2、从服务器端加载 九宫格菜单按钮
    reqGrid9MenuItems()
      .then(items => {
        this.grid9MenuItems = items
      }, error => {
        MessageBox.alert(error.message, "错误信息");
      })
  },
  data () {
    return {
      swipeImgUrls: [],
      grid9MenuItems: []
    }
  }
}
</script>

<style scoped>
  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border-style: none;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell {
    border-style: none;
  }
  .mui-table-view-cell img {
    width: 84px;
  }
</style>