<template>
    <div>
        <h1>Product Detail PAge</h1>
    </div>
</template>

<script>
import products from '@/data';

    export default {
        name: "ProductDetailPage",
        data() {
            return {
                product: products.find((prod) => prod.id === this.$route.params.productId)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>