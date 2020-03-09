<template>
  <div class="goods-detail">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :swipe-img-urls="swipeImgUrls" :heightFull="true"></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsDetail.name }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="prices">
            市场价：<span class="old-price">￥{{ goodsDetail.old_price }}</span>
            销售价：<span class="price">￥{{ goodsDetail.price }}</span>
          </div>
          <div>
            购买数量：<number-box :value="1" :change="change" :style="'height: 23px'" :min-value="1" :max-value="goodsDetail.inventories"></number-box>
          </div>
          <div class="btns">
            <mt-button type="primary">立即购买</mt-button>
            <mt-button type="danger">加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="goods-no">商品货号：{{ goodsDetail.goods_no }}</div>
          <div>库存情况：{{ goodsDetail.inventories }}件</div>
          <div class="add-time">上架时间：{{ goodsDetail.add_time | dateFormat }}</div>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" plain size="large">图文介绍</mt-button>
        <mt-button type="danger" plain size="large">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { reqGoodsDetail } from '../../api'
import Swiper from '../../components/Swiper.vue'
import NumberBox from '../../components/NumberBox.vue'
export default {
  name: "GoodsDetail",
  components: { Swiper, NumberBox },
  created () {
    this.loadGoodsDetail()
  },
  data () {
    return {
      goodsDetail: {},
      swipeImgUrls: [],
      purchases: 0
    }
  },
  methods: {
    loadGoodsDetail () {
      reqGoodsDetail(this.$route.params.id)
        .then(goodsDetail => {
          this.goodsDetail = goodsDetail
          this.swipeImgUrls = goodsDetail.images || []
        }, error => {
          MessageBox.alert(error.message, "错误信息");
        })
    },
    change (purchases) {
      this.purchases = purchases
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-detail {
  .mui-card {
    .mui-card-content {
      color: #777;
      .old-price {
        text-decoration: line-through;
        margin-right: 15px;
      }
      .prices {
        margin-bottom: 15px;
        .price {
          font-weight: bold;
          color: red;
        }
      }
      .btns {
        margin-top: 15px;
      }     
      .goods-no {
        margin-bottom: 15px;
      }
      .add-time {
        margin-top: 15px;
      }
    }
    .mui-card-footer {
      display: flex;
      flex-direction: column;
      button:first-child {
        margin-bottom: 10px;
      }
    }
  }
}

</style>