<template>
    <div class="products__page">
        <div class="products__page-header">
            <h1 class="page-title">Our Products</h1>

            <p>0 good(s) in cart</p>
            <CartButton/>
        </div>
        <ProductsList :products="products"/>
    </div>
</template>

<script>
import CartButton from '@/components/CartButton.vue';
import ProductsList from '@/components/ProductsList.vue';
import axios from 'axios';

    export default {
        name: "ProductsPage",
        components: {
            CartButton,
            ProductsList,
        },

        data() {
            return {
                products: [],
            }
        },
        async created() {
            const response = await axios.get('/api/products');
            const products = response.data;
            this.products = products
        }
    }
</script>

<style lang="scss" scoped>
.products__page {
    &-header {
        display: flex;
        justify-content: space-between;
        margin: 0 70px 75px 70px;
        align-items: center;
    }
}

</style>