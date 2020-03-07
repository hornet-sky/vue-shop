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
  </div>
</template>

<script>
import { reqPhotoSharingTopTabs } from '../../api'
import mui from '../../lib/mui/js/mui'
export default {
  name: 'PhotoSharing',
  created () {
    this.loadTopTabs()
  },
  mounted () {
    mui('.mui-scroll-wrapper').scroll({
      scrollY: false, //是否竖向滚动
      scrollX: true, //是否横向滚动
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    })
  },
  data () {
    return {
      topTabs: [],
      topTabActiveId: null
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
  }
}
</script>

<style scoped>

</style>