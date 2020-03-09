import { ADD_GOODS_TO_CART, MINUS_GOODS_FROM_CART, CLEAR_CART } from './mutations-type'
export default {
  [ADD_GOODS_TO_CART] ({ goodsInCart }, goods) {
    const goodsAdded = goodsInCart.find(item => item.id == goods.id)
    if(goodsAdded) {
      goodsAdded.count += goods.count
      goodsAdded.price = goods.price
    } else {
      goodsInCart.push(goods)
    }
    localStorage.setItem('goodsInCart', JSON.stringify(goodsInCart))
  },
  [MINUS_GOODS_FROM_CART] ({ goodsInCart }, goods) {
    const idx = goodsInCart.findIndex(item => item.id == goods.id)
    if(idx != -1) {
      const goodsAdded = goodsInCart[idx]
      goodsAdded.count -= goods.count
      goodsAdded.price = goods.price
      if(goodsAdded.count <= 0) {
        goodsInCart.splice(idx, 1)
      }
      localStorage.setItem('goodsInCart', JSON.stringify(goodsInCart))
    }
  },
  [CLEAR_CART] (state) {
    state.goodsInCart = []
    localStorage.removeItem('goodsInCart')
  }
}