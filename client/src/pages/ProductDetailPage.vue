<template>
    <div class="detail__page">
        <div class="detail__page-header">
            <router-link
            to="/products"
            custom
            v-slot="{ navigate }"
            >
                <BackButton @click="navigate"/>
            </router-link>
            <div>
                <p>0 good(s) in cart</p>
                <router-link
            to="/cart"
            custom
            v-slot="{ navigate }"
            >
                <CartButton @click="navigate"/>
            </router-link>
            <button class="detail__page-header_btn">Logout</button>
            </div>
        </div>
        <div v-if="product" class="product__wrapper">
            <img :src="product.image" alt="image" class="product__wrapper-image">
            <div class="product__wrapper-card">
                <h1 class="product__card-title">{{ product.title }}</h1>
                <h3 class="product__card-descrip">{{ product.description }}</h3>
                <div class="product__card-bottom">
                    <h2 class="product__card-bottom_proce">{{ product.price }} $</h2>
                    <button class="product__card-bottom_btn">Add to Cart</button>
                </div>
            </div>
        </div>
        <div v-if="!product">
            <PageNotFound />
        </div>
    </div>
</template>

<script>
import { products } from '@/data';
import BackButton from '@/components/BackButton.vue';
import CartButton from '@/components/CartButton.vue';
import PageNotFound from './PageNotFound.vue';

    export default {
        name: "ProductDetailPage",
        components: {
            BackButton,
            CartButton,
            PageNotFound
        },
        data() {
            return {
                product: products.find(product => product.id === this.$route.params.productId)
            }
        }
    }
</script>

<style lang="scss" scoped>
.detail__page {
    height: 100vh;
    background: url('@/assets/image-bg.png');
    background-repeat: repeat;
    background-size: cover;

    &-header {
        display: flex;
        justify-content: space-between;

        &_btn {
            width: 200px;
            height: 42px;
            color: #D58C51;
            background: transparent;
            border: 1px solid #D58C51;
        }
    }
}

.product__wrapper {
    display: flex;
    justify-content: center;
    gap: 200px;

    &-image {
        width: 501px;
        height: 503px;
    }

    &-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
.product__card {
    &-title {
        color: #D58C51;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-bottom: 21px;
    }

    &-descrip {
        width: 528px;
        height: 213px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    &-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &_price {
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

        &_btn {
            cursor: pointer;
            width: 200px;
            height: 42px;
            font-size: 18px;
            background: #D58C51;
            border: none;
        }
    }
}
</style>