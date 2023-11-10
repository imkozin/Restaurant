<template>
    <div v-for="product in initialItems" class="product__card" :key="product.product.id">
        <router-link :to="'/products/' + product.product.id">
            <img :src="product.product.imageUrl" alt="plate" class="product__card-image">
        </router-link>
        <h4 class="product__card-title">{{ product.product.title }}</h4>
            <div class="product__card-bottom">
                <h4 class="product__card-bottom_price">{{ getItemTotal(product) }} $</h4>
                <DeleteButton @click="removeFromCart(product)"/>
            </div>
    </div>
</template>

<script>
import DeleteButton from './DeleteButton.vue';

export default {
  name: "ShoppingCartList",
  props: {
    initialItems: Array
  },
  components: { DeleteButton },
  computed: {
    getItemTotal() {
      return (product) => {
        return product.quantity * product.product.price;
      };
    }
  },
  methods: {
    removeFromCart(product) {
      this.$emit('removeFromCart', product)
    }
  }
}
</script>


<style lang="scss" scoped>
.product__card {
    display: flex;
    justify-content: center;
    align-items: center;

    &-image {
        width: 132px;
        height: 132px;
        margin: 43px 21px 31px 21px;
    }

    &-title {
        width: 310px;
        font-weight: 500;
        margin-left: 88px;
        margin-right: 216px;
    }

    &-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &_price {
            color: #D58C51;
            font-family: 'Montserrat';
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin-right: 20px;
            width: 70px;
        }

        &_plus, &_minus {
            font-size: 2em;
        }
    }
}
</style>