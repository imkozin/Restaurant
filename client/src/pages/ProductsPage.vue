<template>
    <div class="products__page">
        <div class="products__page-header">
            <h1 class="page-title">Our Products</h1>
            <router-link
            to="/cart"
            custom
            v-slot="{ navigate }"
            >
            <CartButton @click="navigate"/>
            </router-link>
        </div>
        <div class="products__wrapper">
            <div v-for="product in products" :key="product.id" class="product__card">
                <img :src="product.image" alt="plate" class="product__card-image">
                <h3 class="product__card-title">{{ product.title }}</h3>
                <h5 class="product__card-descrip">{{ product.description }}</h5>
                <div class="product__card-bottom">
                    <h4 class="product__card-bottom_price">{{ product.price }} $</h4>
                    <button class="product__card-bottom_btn">+</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { products } from '@/data';
import CartButton from '@/components/CartButton.vue';

    export default {
        name: "ProductsPage",
        components: {
            CartButton
        },

        data() {
            return {
                products,
            }
        }
    }
</script>

<style lang="scss" scoped>
.products__page {
    height: 100vh;

    &-header {
        display: flex;
        justify-content: space-between;
        margin: 48px 70px 75px 70px;
        margin-top: 54px;
        align-items: center;
    }
}

.products__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 35px 20px ;
    justify-content: center;
    align-items: center;
}

.product__card {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 312px;
    height: 552px;
    flex-shrink: 0;
    border: 1px solid #D58C51;

    &-image {
        height: 270px;
        width: 270px;
        margin: 43px 21px 31px 21px;
    }

    &-title {
        font-size: 17px;
        font-weight: 500;
        margin: 0 27px 9px 21px;
    }

    &-descrip {
        font-size: 14px;
        font-weight: 400;
        width: 264px;
        height: 68px;
        flex-shrink: 0;
        margin: 0px 30px 32px 21px;
        flex-grow: 1;
    }

    &-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0px 30px 32px 21px;

        &_price {
            font-size: 17px;
            font-weight: 500;
        }

        &_btn {
            color: white;
            font-size: 24px;
            background-color: transparent;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid #fff;
        }
    }
}

.product__card:hover .product__card-title,
.product__card:hover .product__card-descrip,
.product__card:hover .product__card-bottom {
    cursor: pointer;
    color: #D58C51;
}

.product__card-bottom_btn:hover {
    cursor: pointer;
    color: white;
    border: 1px solid #D58C51;
    background-color: #D58C51;
}
</style>