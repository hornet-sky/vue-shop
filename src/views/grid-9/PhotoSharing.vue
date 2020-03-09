<template>
  <div>
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a class="mui-control-item" :class="{'mui-active': topTabActiveId == topTab.id}" @click="topTabActiveId = topTab.id" href="javascript:void(0)" v-for="topTab in topTabs" :key="topTab.id">
            {{ topTab.title }}
          </a>
        </div>
      </div>
    </div>
    <ul class="photo-items">
      <router-link tag="li" :to="`/photo_sharing_detail/${item.id}`" v-for="item in photoItems" :key="item.id">
        <img v-lazy="item.photo_url">
        <div clss="photo-item-desc">
          <h4>{{ item.title }}</h4>
          <span>{{ item.sub_title }}</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { reqPhotoSharingTopTabs, reqPhotoSharingItems } from '../../api'
export default {
  name: 'PhotoSharing',
  created () {
    this.loadTopTabs()
  },
  mounted () {
    this.common.mui('.mui-scroll-wrapper').scroll({
      scrollY: false, //是否竖向滚动
      scrollX: true, //是否横向滚动
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    })
  },
  data () {
    return {
      topTabs: [],
      topTabActiveId: null,
      photoItems: []
    }
  },
  methods: {
    loadTopTabs () {
      reqPhotoSharingTopTabs()
        .then(topTabs => {
          this.topTabs = topTabs
          if(topTabs.length > 0) {
            this.topTabActiveId = topTabs[0].id
          }
        }, error => {
          MessageBox.alert(error.message, "错误信息");
        })
    }
  },
  watch: {
    topTabActiveId (newVal) {
      console.log('arguments', arguments, newVal, typeof newVal)
      if(newVal === null) {
        this.photoItems = []
        return
      }
      reqPhotoSharingItems(newVal)
        .then(items => {
          this.photoItems = items
        }, error => {
          MessageBox.alert(error.message, "错误信息");
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.photo-items {
  list-style-type: none;
  padding: 0 6px;
  margin: 0;
  li {
    position: relative;
    padding: 3px 0;
    img {
      width: 100%;
      min-height: 375px;
      vertical-align: middle;
      background-color: #aaa;
      box-shadow:2px 2px 5px #999;
    }
    /*
    img[lazy=loading] {
      width: 40px;
      height: 40px;
      margin: auto;
    }
    */
    div {
      color: #fff;
      position:absolute;
      bottom: 0px;
      padding: 3px;
      h4 {
        font-size: 13px;
      }
      span {
        font-size: 12px;
      }
    }
  }
}
</style>