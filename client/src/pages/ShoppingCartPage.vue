<template>
    <div class="cart__page">
        <div class="cart__page-header">
            <BackButton/>
            <h1 class="page-title">Shopping cart with selected items</h1>
        </div>
        <div v-if="cartItems.length > 0" class="cart__page-wrapper">
            <div v-for="product in cartItems" class="product__card" :key="product.id">
                <router-link :to="'/products/' + product.id">
                    <img :src="product.image" alt="plate" class="product__card-image">
                </router-link>
                <h4 class="product__card-title">{{ product.title }}</h4>
                    <div class="product__card-bottom">
                        <h4 class="product__card-bottom_price">{{ product.price }} $</h4>
                        <DeleteButton />
                    </div>
            </div>
        </div>
        <h3 v-else class="cart__page-message">
            You currently have no items in your cart!
        </h3>
        <hr class="line">
        <div class="footer">
            <div class="footer__total">Total Amount:<span class="footer__total-amount">0 $</span></div>
            <button class="footer__out-btn">Proceed to Checkout</button>
        </div>
    </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue';
import DeleteButton from '@/components/DeleteButton.vue';
import { cartItems } from '@/data';

    export default {
        name: "ShoppingCartPage",
        components: {
            BackButton,
            DeleteButton
        },
        data() {
            return {
                cartItems
            }
        }
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

.footer {
    display: flex;
    justify-content: center;
    align-items: center;

    &__out-btn {
        cursor: pointer;
        width: 200px;
        height: 42px;
        font-size: 18px;
        background: #D58C51;
        border: none;
        margin-left: 360px;
    }

    &__total {
        text-transform: uppercase;

        &-amount {
            color: #D58C51;
            margin-left: 16px;
        }
    }
}

.line {
    border: 1px solid #D58C51;
    margin-bottom: 20px;
}
</style>