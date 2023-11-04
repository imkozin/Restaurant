<template>
  <div class="cart__page">
    <div class="cart__page-header">
      <BackButton />
      <h1 class="page-title">Shopping cart with selected items</h1>
    </div>
    <div v-if="cartItems.length > 0" class="cart__page-wrapper">
      <ShoppingCartList :products="cartItems" />
    </div>
    <h3 v-else class="cart__page-message">
      You currently have no items in your cart!
    </h3>
    <hr class="line" />
    <div class="footer">
      <div class="footer__total">
        Total Amount:<span class="footer__total-amount">0 $</span>
      </div>
      <button class="footer__out-btn">Proceed to Checkout</button>
    </div>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue'
import { cartItems } from '@/data'
import ShoppingCartList from '@/components/ShoppingCartList.vue'

export default {
  name: 'ShoppingCartPage',
  components: {
    BackButton,
    ShoppingCartList,
  },
  setup() {
    return {
      cartItems,
    }
  },
}
</script>

<style lang="scss" scoped>
.cart__page {
  height: 100vh;

  &-header {
    display: flex;
    width: 1130px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  &-wrapper {
    margin-left: 290px;
    margin-right: 300px;
  }

  &-message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    text-transform: uppercase;
  }
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;

  &__out-btn {
    cursor: pointer;
    width: 200px;
    height: 42px;
    font-size: 18px;
    background: #d58c51;
    border: none;
    margin-left: 360px;
  }

  &__total {
    text-transform: uppercase;

    &-amount {
      color: #d58c51;
      margin-left: 16px;
    }
  }
}

.line {
  border: 1px solid #d58c51;
  margin-bottom: 20px;
}
</style>
