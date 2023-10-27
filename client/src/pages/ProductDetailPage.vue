<template>
    <div class="detail-page">
        <div class="detail__page-header">
            <router-link
            to="/products"
            custom
            v-slot="{ navigate }"
            >
                <BackButton @click="navigate"/>
            </router-link>
            <router-link
            to="/cart"
            custom
            v-slot="{ navigate }"
            >
                <CartButton @click="navigate"/>
            </router-link>
        </div>
        <div class="product-wrapper">
            <img :src="product.image" alt="image">
            <h1>{{ product.title }}</h1>
            <h3>{{ product.price }}</h3>
            <p>{{ product.description }}</p>
            <button>Add to Cart</button>
        </div>
    </div>
</template>

<script>
import { products } from '@/data';
import BackButton from '@/components/BackButton.vue';
import CartButton from '@/components/CartButton.vue';

    export default {
        name: "ProductDetailPage",
        components: {
            BackButton,
            CartButton
        },
        data() {
            return {
                product: products.find(product => product.id === this.$route.params.productId)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>