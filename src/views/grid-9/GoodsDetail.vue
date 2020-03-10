<template>
  <div class="goods-detail">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :swipe-img-urls="swipeImgUrls" :heightFull="true"></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card" style="overflow: auto">
      <div class="mui-card-header">{{ goodsDetail.name }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="prices">
            市场价：<span class="old-price">￥{{ goodsDetail.old_price }}</span>
            销售价：<span class="price">￥{{ goodsDetail.price }}</span>
          </div>
          <div>
            购买数量：
            <number-box ref="numbox" :value="1" :change="change" :style="'height: 23px'" :min-value="1" :max-value="goodsDetail.inventories"></number-box>
          </div>
          <div class="btns">
            <mt-button type="primary">立即购买</mt-button>
            <mt-button type="danger" @click="addGoodsToCart">加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div ref="ball" class="ball" v-show="isBallShow"></div>
    </transition>
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
        <mt-button type="primary" plain size="large" @click="$router.push($route.path + '/introduction')">图文介绍</mt-button>
        <mt-button type="danger" plain size="large" @click="$router.push($route.path + '/comments')">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { mapGetters } from 'vuex'
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
      purchases: 1,
      isBallShow: false,
      task: null
    }
  },
  computed: {
    ...mapGetters(['cartEleRect']),
    ballInitialLeft () { // 获取小球的初始位置
      return this.$refs.numbox.$el.getBoundingClientRect().left + 50
    },
    ballInitialTop () { // 返回的是绝对位置，而不是视口位置
      return this.$refs.numbox.$el.getBoundingClientRect().top + (document.documentElement.scrollTop || document.body.scrollTop) - 50
    }
  },
  methods: {
    addGoodsToCart() {
      if(!this.lock) {
        this.lock = setTimeout(() => { // 防止频繁点击
          this.lock = null
        }, 1200)
        this.isBallShow = true
        const goods = {
          id: this.$route.params.id,
          count: this.purchases,
          price: this.goodsDetail.price,
          enabled: true
        }
        this.$store.dispatch('addGoodsToCart', goods)
      }
    },
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
      this.purchases = Number.parseInt(purchases)
    },
    beforeEnter (el) {
      el.style.left = this.ballInitialLeft + 'px'
      el.style.top = this.ballInitialTop + 'px'
      el.style.transform = 'translate(0, 0)'
    },
    enter (el, done) {
      const x = this.cartEleRect.left - this.$refs.ball.getBoundingClientRect().left
      const y = this.cartEleRect.top - this.$refs.ball.getBoundingClientRect().top
      console.log(x, y )
      el.offsetWidth // 只有调用offsetXxx才会有动画效果，不知道是不是bug
      el.style.transform = `translate(${x}px, ${y}px)`
      el.style.transition = 'all 1s cubic-bezier(.42,0,.58,1)'
      done() // 相当于立即执行afterEnter() ，不然的话会延迟一会再执行afterEnter()
    },
    afterEnter (el) {
      console.log('after enter')
      this.isBallShow = false // 让下半场动画（仅仅是延时一段时间后消失）随着上半场动画同时执行，会达到上半场动画执行完毕后消失的效果（即 两场动画同时结束）。因为 false -> true 启动了上半场动画，而true -> false 启动了下半场动画
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-detail {
  position: relative;
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
  .ball {
    position: absolute;
    z-index: 999;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
  }
}

</style>