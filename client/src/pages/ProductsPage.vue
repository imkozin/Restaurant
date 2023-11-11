<template>
    <div class="products__page">
        <div class="products__page-header">
            <h1 class="products__page-title">Our Products</h1>
            <div class="products__page-cart">
                <div class="products__page-cart_goods">{{cartTotalLength}} good(s) in cart
                </div>
                <CartButton />
            </div>
        </div>
        <ProductsList :products="products"/>
    </div>
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';
import CartButton from '@/components/CartButton.vue';
import axios from 'axios';

    export default {
        name: "ProductsPage",
        components: {
            ProductsList,
            CartButton
        },
        data() {
            return {
                products: [],
                cartItems: []
            }
        },
        beforeCreate() {
            this.$store.commit('initializeStore')
        },
        mounted() {
            this.getProducts()
            document.title = 'Burgerovich'

            this.cartItems = this.$store.state.cartItems
        },
        methods: {
            async getProducts() {
                const response = await axios.get('/api/products');
                const products = response.data;
                this.products = products
            }
        },
        computed: {
            cartTotalLength() {
                let totalLen = 0

                for (let i = 0; i < this.cartItems.length; i++) {
                        totalLen += this.cartItems[i].quantity
                    }
                return totalLen
            }
        },
    }
</script>

<style lang="scss" scoped>
.products__page {
    &-header {
        display: flex;
        justify-content: space-between;
        margin: 10px 70px 75px 70px;
        align-items: center;
    }

    &-cart {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
}

</style>