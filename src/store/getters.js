
export default {
  goodsTotal ({ goodsInCart: goodsList }) {
    return goodsList.reduce((result, goods) => result += goods.count, 0)
  }
}