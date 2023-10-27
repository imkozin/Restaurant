import { createStore } from 'vuex'
import products from '@/data'

export default createStore({
  state: {
    Products: products
  },
  getters: {
    getProducts: state => state.Products,
    getProductById: (state) => (productId) => {
      return state.Products.find(product => product.id === productId);
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
