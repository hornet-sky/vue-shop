<template>
  <ul class="mui-table-view" 
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="scrollDisabled"
  infinite-scroll-distance="10">
    <li class="mui-table-view-cell mui-media" v-for="news in newsList" :key="news.id">
      <router-link :to="`${$route.path}/${news.id}`">
        <img class="mui-media-object mui-pull-left" :src="news.img_url">
        <div class="mui-media-body">
          <div class='mui-ellipsis'>{{ news.sub_title }}</div>
          <p>
            <span>发表时间：{{ news.publish_time | dateFormat }}</span>
            <span>点击：{{ news.page_view }}次</span>
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { MessageBox, Toast } from 'mint-ui'
import { reqNewsList } from '../../api'
export default {
  name: 'NewsList',
  created () {
    // this.loadNewsList()
  },
  data () {
    return {
      newsList: [],
      pageNumber: -1,
      pageSize: 11,
      loading: false,
      dataEnd: false,
      toast: null
    }
  },
  methods: {
    loadNewsList () {
      this.loading = true
      if(this.toast != null) this.toast.close()
      this.toast = Toast({
        message: 'loading...',
        duration: -1
      })
      reqNewsList(++this.pageNumber, this.pageSize)
      .then(items => {
        this.newsList = this.newsList.concat(items)
        if(this.toast != null) this.toast.close()
        this.loading = false
        if(items.length === 0) {
          this.dataEnd = true
        }
      }, error => {
        MessageBox.alert(error.message, "错误信息");
        if(this.toast != null) this.toast.close()
        this.loading = false
        this.dataEnd = true
      })
    },
    loadMore () {
      console.log('loadMore...')
      if(this.dataEnd) {
        return
      }
      this.loadNewsList()
    }
  },
  computed: {
    scrollDisabled () {
      return this.loading || this.dataEnd
    }
  }
}
</script>

<style scoped>
.mui-media-body p {
  display: flex;
  justify-content: space-between;
}
</style>