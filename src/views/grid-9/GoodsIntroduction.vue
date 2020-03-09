<template>
  <div class="goods-introduction">
    <h4 class='mui-ellipsis title'>{{ goodsIntroduction.title }}</h4>
    <hr>
    <div class="content" v-html="goodsIntroduction.introduction"></div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { reqGoodsIntroduction } from '../../api'

export default {
  name: "GoodsIntroduction",
  created () {
    this.loadGoodsIntroduction()
  },
  data () {
    return {
      goodsIntroduction: {}
    }
  },
  methods: {
    loadGoodsIntroduction () {
      reqGoodsIntroduction(this.$route.params.id)
        .then(goodsIntroduction => {
          this.goodsIntroduction = goodsIntroduction
        }, error => {
          MessageBox.alert(error.message, "错误信息");
        })
    }
  }
}
</script>

<style lang="scss">
.goods-introduction {
  padding: 0 6px 6px;
  .title {
    color: #26A2FF;
    text-align: center;
    line-height: 35px;
    font-size: 15px;
  }
  .content {
    font-size: 14px;
    img {
      width: 100%;
    }
  }
}
</style>