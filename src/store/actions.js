import { reqGoodsListByIds } from '../api'
import { ADD_GOODS_TO_CART, MINUS_GOODS_FROM_CART, SET_GOODS_COUNT, CLEAR_CART, SHARE_CART_ELEMENT } from './mutations-type'

export default {
  addGoodsToCart ({ commit }, goods) {
    commit(ADD_GOODS_TO_CART, goods)
  },
  minusGoodsFromCart ({ commit }, goods) {
    commit(MINUS_GOODS_FROM_CART, goods)
  },
  setGoodsCount ({ commit }, goods) {
    commit(SET_GOODS_COUNT, goods)
  },
  clearCart ({ commit }) {
    commit(CLEAR_CART)
  },
  shareCartElement ({ commit }, cartEle) { 
    commit(SHARE_CART_ELEMENT, cartEle)
  },
  async prepareGoodsDetailInCart ({ commit, state: { goodsInCart } }) { 
    const goodIds = goodsInCart.map(good => good.id).join(',')
    return await reqGoodsListByIds(goodIds)
  }
}