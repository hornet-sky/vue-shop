<template>
  <div id="news-detail">
    <h4 class='mui-ellipsis news-detail-title'>{{ newsDetail.sub_title }}</h4>
    <div class='news-detail-subtitle'>
      <span>发表时间：{{ newsDetail.publish_time | dateFormat }}</span>
      <span>点击了{{ newsDetail.page_view }}次</span>
    </div>
    <hr>
    <div class="news-detail-content" v-html="newsDetail.detail"></div>
    <comment :comment-list="newsComments" :is-load-more-btn-show="isLoadMoreBtnShow" @loadMore="loadNewsComments" @publishComment="publishComm"></comment>
  </div>
</template>

<script>
import Comment from '../../components/Comment.vue'
import { Toast } from 'mint-ui'
import { reqNewsDetail, reqNewsComments, reqNewsCommentAdd } from '../../api'
export default {
  name: 'NewsDetail',
  created () {
    this.loadNewsDetail()
    this.loadNewsComments()
  },
  data () {
    return {
      newsDetail: {},
      newsComments: [],
      isLoadMoreBtnShow: false,
      commentPageNumber: -1,
      commentPageSize: 3,
    }
  },
  methods: {
    loadNewsDetail () {
      reqNewsDetail(this.$route.params.id)
        .then(newsDetail => {
          this.newsDetail = newsDetail
        })
        .catch(error => {
          MessageBox.alert(error.message, "错误信息");
        })
    },
    loadNewsComments () {
      reqNewsComments(this.$route.params.id, ++this.commentPageNumber, this.commentPageSize)
        .then(newsComments => {
          this.newsComments.push(...newsComments)
          this.isLoadMoreBtnShow = newsComments.length > 0
        })
        .catch(error => {
          MessageBox.alert(error.message, "错误信息");
        })
    },
    publishComm (comment) {
      reqNewsCommentAdd(this.$route.params.id, comment)
        .then(commentAdded => {
          this.newsComments.unshift(commentAdded)
        })
        .catch(error => {
          MessageBox.alert(error.message, "错误信息");
        })
    }
  },
  components: { Comment }
}
</script>

<style>
#news-detail {
  padding: 0 10px 10px 10px;
}
.news-detail-title {
  padding: 0;
  margin: 20px 0;
  text-align: center;
  color: red;
}
.news-detail-content {
  margin-bottom: 20px;
}
.news-detail-content img {
  width: 100%;
}
.news-detail-subtitle {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #26A2FF;
}
</style>