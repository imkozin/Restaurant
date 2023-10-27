<template>
    <div>
        <div class="cart__page-header">
            <router-link
            to="/products"
            custom
            v-slot="{ navigate }"
            >
            <BackButton @click="navigate"/>
            </router-link>
            <h1 class="page-title">Shopping cart with selected items</h1>
        </div>
    </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue';
    export default {
        name: "ShoppingCartPage",
        components: {
            BackButton
        }
    }
</script>

<style lang="scss" scoped>
.cart__page-header {
    display: flex;
    width: 1130px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}
</style>