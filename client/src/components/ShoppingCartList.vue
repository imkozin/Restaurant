<template>
    <div v-for="product in products" class="product__card" :key="product.id">
        <router-link :to="'/products/' + product.id">
            <img :src="product.image" alt="plate" class="product__card-image">
        </router-link>
        <h4 class="product__card-title">{{ product.title }}</h4>
            <div class="product__card-bottom">
                <h4 class="product__card-bottom_price">{{ product.price }} $</h4>
                <DeleteButton />
            </div>
    </div>
</template>

<script>
import DeleteButton from './DeleteButton.vue';
    export default {
        name: "ShoppingCartList",
        props: ['products'],
        setup() {
            return {
                DeleteButton
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
        }
    }
}
</style>