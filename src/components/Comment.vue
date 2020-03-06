<template>
  <div>
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入评论内容（最多120个字）" v-model="myComment"></textarea>
    <mt-button type="primary" size="large" @click="publishComment">发表评论</mt-button>
    <div class="comment-list">
      <div class="comment-item" v-for="(comment, index) in commentList" :key="comment.id">
        <div class="comment-item-title">
          <span>{{ index + 1 }}楼 用户：{{ comment.user_name }}</span>
          <span>发表时间：{{ comment.publish_time | dateFormat }}</span>
        </div>
        <div class="comment-item-content">{{ comment.content }}</div>
      </div>
    </div>
    <mt-button type="danger" plain size="large" v-show="isLoadMoreBtnShow" @click="$emit('loadMore')">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    commentList: Array,
    isLoadMoreBtnShow: Boolean
  },
  data () {
    return {
      myComment: ''
    }
  },
  methods: {
    publishComment () {
      if(!this.myComment) {
        return
      }
      const currentComment = {
        "user_name": "my",
        "publish_time": Date.now(),
        "content": this.myComment
      }
      this.$emit('publishComment', currentComment)
      this.myComment = ''
    }
  }
}
</script>

<style scoped>
.comment-item {
  font-size: 12px;
}
.comment-item-title {
  display: flex;
  justify-content: space-between;
  background-color: #bebebe;
  line-height: 25px;
}
.comment-item-content {
  font-size: 14px;
  text-indent: 2em;
  line-height: 30px;
}
.comment-list {
  margin: 10px 0;
}
</style>