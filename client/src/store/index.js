import { createStore } from 'vuex'

export default createStore({
  state: {
    cartItems: [],
    isAuthenticated: false,
    token: '',
  },
  getters: {
    getCartItems: (state) => state.cartItems,
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('cart')) {
        state.cartItems = JSON.parse(localStorage.getItem('cart'))
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cartItems))
      }
    },
    setAuthenticated(state, status) {
      state.isAuthenticated = status
    },
    addToCart(state, item) {
      const exists = state.cartItems.filter((i) => i.product.id === item.id)

      if (exists.length) {
        exists[0].quantity =
          parseInt(exists[0].quantity) + parseInt(item.quantity)
      } else {
        state.cartItems.push(item)
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
  },
  actions: {},
  modules: {},
})
