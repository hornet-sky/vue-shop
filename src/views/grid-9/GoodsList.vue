<template>
  <!-- 缺一个无限滚动 -->
  <ul class="goods-list">
    <router-link tag="li" v-for="goods in goodsList" :key="goods.id" :to="`/goods_detail/${goods.id}`">
      <img v-lazy="goods.cover_image">
      <h3>{{ goods.name }}</h3>
      <div class="parameters">
        <div class="prices">
          <span class="price">￥{{ goods.price }}</span>
          <span class="old-price">￥{{ goods.old_price }}</span>
        </div>
        <div class="states">
          <span>{{ goods.state }}</span>
          <span>剩{{ goods.inventories }}件</span>
        </div>
      </div>
    </router-link>
  </ul>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { reqGoodsList } from '../../api'
export default {
  name: "GoodsList",
  created () {
    this.loadGoodsList()
  },
  data () {
    return {
      pageNum: -1,
      pageSize: 10,
      goodsList: []
    }
  },
  methods: {
    loadGoodsList () {
      reqGoodsList(++this.pageNum, this.pageSize)
        .then(items => {
          this.goodsList = this.goodsList.concat(items)
        }, error => {
          MessageBox.alert(error.message, "错误信息");
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 6px;
  margin: 0;
  li {
    border: 1px solid #ccc;
    box-shadow: 2px 2px 5px #999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 49%;
    margin-bottom: 6px;
    img {
      width: 100%;
      background-color: #eee;
      vertical-align: middle;
    }
    h3 {
      padding: 0 3px;
      text-align: center;
      font-size: 18px;
    }
    .parameters {
      background-color: #eee;
      color: #666;
      .prices {
        padding: 6px;
        .price {
          font-size: 18px;
          font-weight: bold;
          color: red;
          margin-right: 10px;
        }
        .old-price {
          font-size: 14px;
          text-decoration: line-through;
        }
      }
      .states {
        padding: 6px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>