<template>
  <div>
    <div class="mui-card goods-list" v-for="gd in goodsDetails" :key="gd.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch v-model="gd.enabled"></mt-switch>
          <img :src="gd.cover_image">
          <div class="right-content">
            <h4>{{ gd.name }}</h4>
            <div class="bottom-content">
              <span class="price">￥{{ gd.price }}</span>
              <number-box :value="gd.count" :expansions="{'goodsId': gd.id}" :change="change" :style="'height: 23px'" :min-value="1" :max-value="gd.inventories"></number-box>
              <a href="javascript:void(0)" @click.prevent="deleteGoods(gd.id)">删除</a>
            </div>
            <div class="inventories-waring" v-if="gd.overflow">库存仅剩{{ gd.inventories }}件</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card total-infos">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="left-content">
            <span class="title">总计（不含运费）</span>
            <span>
              已勾选商品<span class="important-num"> {{ goodsTotal }} </span>件，总价：
              <span class="important-num">￥{{ priceTotal }}</span>
            </span>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import NumberBox from '../../components/NumberBox.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Cart',
  created () {
    this.prepareGoodsDetailInCart()
      .then(goodsDetails => {
        this.goodsDetails = goodsDetails
          .map(d => {
            const g = this.goodsInCart.find(g => g.id == d.id)
            if(g) {
              d.count = g.count
              d.overflow = g.count > d.inventories
              d.enabled = g.enabled && !d.overflow
              if(d.overflow) {
                setTimeout(() => { // 放到队列里延后执行
                  this.change(d.inventories, { goodsId: g.id })
                })
              }
            }
            return d
          })
      }, error => {
        MessageBox.alert(error.message, "错误信息");
      })
  },
  components: { NumberBox },
  data () {
    return {
      goodsDetails: []
    }
  },
  computed: {
    ...mapState(['goodsInCart']),
    goodsTotal () {
      return this.goodsDetails.reduce((result, gd) => {
        return result += gd.enabled ? gd.count : 0
      }, 0)
    },
    priceTotal () {
      return this.goodsDetails.reduce((result, gd) => {
        return result += gd.enabled ? gd.price * gd.count : 0
      }, 0)
    }
  },
  methods: {
    ...mapActions(['prepareGoodsDetailInCart', 'setGoodsCount']),
    change (count, expansions) {
      console.log('aaa', count, expansions)
      this.setGoodsCount({ id: expansions.goodsId, count: count })
      const idx = this.goodsDetails.findIndex(d => d.id == expansions.goodsId)
      this.goodsDetails[idx].count = count < 0 ? 0 : count
      if(count <= 0) {
        this.goodsDetails.splice(idx, 1)
      }
    },
    deleteGoods (goodsId) {
      this.change(0, { goodsId })
    }
  }
}
</script>

<style scoped lang="scss">
.goods-list {
  .mui-card-content-inner {
    display: flex;
    img {
      width: 60px;
      max-height: 80px;
    }
    .right-content {
      h4 {
        font-size: 14px;
      }
      .bottom-content {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        .price {
          color: red;
        }
      }
      .inventories-waring {
        padding-top: 10px;
        color: red;
        font-size: 13px;
        text-align: right;
      }
    }
  }
}
.total-infos {
  .mui-card-content-inner {
    display: flex;
    justify-content: space-between;
    .left-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #888;
      font-size: 13px;
      .title {
        margin-bottom: 5px;
      }
      .important-num {
        color: red;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
}
</style>