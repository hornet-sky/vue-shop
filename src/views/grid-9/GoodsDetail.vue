<template>
  <div>
    Goods Detail {{ $route.params.id }}
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
// import { reqGoodsDetail } from '../../api'
export default {
  name: "GoodsDetail",
  created () {
    this.loadGoodsDetail()
  },
  data () {
    return {
      goodsDetail: {}
    }
  },
  methods: {
    loadGoodsDetail () {
      /*
      reqGoodsDetail(this.$route.params.id)
        .then(goodsDetail => {
          this.goodsDetail = goodsDetail
        }, error => {
          MessageBox.alert(error.message, "错误信息");
        })
        */
    }
  }
}
</script>

<style lang="scss" scoped>

</style>