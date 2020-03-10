import { ADD_GOODS_TO_CART, MINUS_GOODS_FROM_CART, CLEAR_CART, SHARE_CART_ELEMENT } from './mutations-type'

export default {
  addGoodsToCart ({ commit }, goods) {
    commit(ADD_GOODS_TO_CART, goods)
  },
  minusGoodsFromCart ({ commit }, goods) {
    commit(MINUS_GOODS_FROM_CART, goods)
  },
  clearCart ({ commit }) {
    commit(CLEAR_CART)
  },
  shareCartElement ({ commit }, cartEle) { 
    commit(SHARE_CART_ELEMENT, cartEle)
  }
}