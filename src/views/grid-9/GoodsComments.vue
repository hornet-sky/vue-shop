<template>
  <comment class="goods-comments" :comment-list="comments" :is-load-more-btn-show="isLoadMoreBtnShow" @loadMore="loadComments" @publishComment="publishComment"></comment>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { reqGoodsComments, reqGoodsCommentAdd } from '../../api'
import Comment from '../../components/Comment.vue'

export default {
  name: "GoodsComments",
  components: { Comment },
  created () {
    this.loadComments()
  },
  data () {
    return {
      comments: [],
      isLoadMoreBtnShow: false,
      commentPageNumber: -1,
      commentPageSize: 3
    }
  },
  methods: {
    loadComments () {
      reqGoodsComments(this.$route.params.id, ++this.commentPageNumber, this.commentPageSize)
        .then(comments => {
          this.comments.push(...comments)
          this.isLoadMoreBtnShow = comments.length > 0
        })
        .catch(error => {
          MessageBox.alert(error.message, "错误信息");
        })
    },
    publishComment (comment) {
      reqGoodsCommentAdd(this.$route.params.id, comment)
        .then(commentAdded => {
          this.comments.unshift(commentAdded)
        })
        .catch(error => {
          MessageBox.alert(error.message, "错误信息");
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-comments {
  padding: 10px;
}

</style>