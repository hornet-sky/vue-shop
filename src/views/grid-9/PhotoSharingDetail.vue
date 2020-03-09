<template>
  <div class="photo-sharing-detail">
    <h4 class="title">{{ detail.title }}</h4>
    <div class="sub_title">
      <span>发表时间：{{ detail.publish_time | dateFormat }}</span>
      <span>点击：{{ detail.page_view }}次</span>
    </div>
    <hr>
    <vue-preview
      :list="detailPhotos"
      :thumbImageStyle="{width: '80px', height: '80px', margin: '10px', 'box-shadow': '2px 2px 5px #999'}"
      :previewBoxStyle="{border: '1px solid #eee'}"
      :tapToClose="true"
      @close="closeHandler"
      @destroy="destroyHandler"
    />
    <div class="desc" v-html="detail.sub_title"></div>
    <comment :comment-list="comments" :is-load-more-btn-show="isLoadMoreBtnShow" @loadMore="loadComments" @publishComment="publishComment"></comment>
  </div>
</template>

<script>
import Comment from '../../components/Comment.vue'
import { reqPhotoSharingDetail, reqPhotoSharingComments, reqPhotoSharingCommentAdd } from '../../api'
export default {
  name: 'PhotoSharingDetail',
  created () {
    this.loadPhotoSharingDetail()
    this.loadComments()
  },
  components: { Comment },
  data () {
    return {
      detail: {},
      comments: [],
      isLoadMoreBtnShow: false,
      commentPageNumber: -1,
      commentPageSize: 3
    }
  },
  computed: {
    detailPhotos () {
      const photoUrls = this.detail.photo_urls
      if(!photoUrls) {
        return []
      }
      return photoUrls.map(item => {
        return {
          src: item.url,
          w: 1200,
          h: 900
        }
      })
    }
  },
  methods: {
    loadPhotoSharingDetail () {
      reqPhotoSharingDetail(this.$route.params.id)
        .then(detail => {
          this.detail = detail
        }, error => {
          MessageBox.alert(error.message, "错误信息");
        })
    },
    loadComments () {
      reqPhotoSharingComments(this.$route.params.id, ++this.commentPageNumber, this.commentPageSize)
        .then(comments => {
          this.comments.push(...comments)
          this.isLoadMoreBtnShow = comments.length > 0
        })
        .catch(error => {
          MessageBox.alert(error.message, "错误信息");
        })
    },
    publishComment (comment) {
      reqPhotoSharingCommentAdd(this.$route.params.id, comment)
        .then(commentAdded => {
          this.comments.unshift(commentAdded)
        })
        .catch(error => {
          MessageBox.alert(error.message, "错误信息");
        })
    },
    // 即将关闭的时候，调用这个处理函数
    closeHandler() {
      console.log('closeHandler')
    },
    // 完全关闭之后，调用这个函数清理资源
    destroyHandler() {
      console.log('destroyHandler')
    }
  }
}
</script>

<style lang="scss" scoped>
.photo-sharing-detail {
  padding: 0 6px 10px 6px;
  .title {
    font-size: 14px;
    color: #26A2FF;
    text-align: center;
    padding: 10px 0;
    margin: 0;
  }
  .sub_title {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    color: #999;
  }
  .desc {
    font-size: 12px;
  }
}
</style>