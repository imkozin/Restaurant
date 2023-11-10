<template>
    <div class="products__page">
        <div class="products__page-header">
            <h1 class="products__page-title">Our Products</h1>
        </div>
        <ProductsList :products="products"/>
    </div>
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';
import axios from 'axios';

    export default {
        name: "ProductsPage",
        components: {
            ProductsList,
        },
        data() {
            return {
                products: [],
            }
        },
        mounted() {
            this.getProducts()
            document.title = 'Burgerovich'
        },
        methods: {
            async getProducts() {
                const response = await axios.get('/api/products');
                const products = response.data;
                this.products = products
            }
        }
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
}

</style>