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
            <div class="detail__page-cart">
                <div>{{cartTotalLength}} good(s) in cart</div>
                <router-link
            to="/cart"
            custom
            v-slot="{ navigate }"
            >
                    <CartButton @click="navigate"/>
                </router-link>
            </div>
        </div>
        <div v-if="product" class="product__wrapper">
            <img :src="product.imageUrl" alt="image" class="product__wrapper-image">
            <div class="product__wrapper-card">
                <h1 class="product__card-title">{{ product.title }}</h1>
                <h3 class="product__card-descrip">{{ product.description }}</h3>
                <div class="product__card-bottom">
                    <h2 class="product__card-bottom_price">{{ product.price }} $</h2>
                    <!-- <input class="product__card-bottom_num" type="number" min="1" max="99" v-model="quantity"> -->
                    <button @click="addToCart" class="product__card-bottom_btn">Add to Cart</button>
                </div>
                <div class="product__card-snackbar" v-if="snackbar">
                        <v-snackbar
                        v-model="snackbar"
                        >
                        {{ text }}
                        </v-snackbar>
                    </div>
            </div>
        </div>
        <div v-else>
            <PageNotFound />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import BackButton from '@/components/BackButton.vue';
import PageNotFound from './PageNotFound.vue';
import CartButton from '@/components/CartButton.vue';

    export default {
        name: "ProductDetailPage",
        data() {
            return {
                product: {},
                quantity: 1,
                snackbar: false,
                text: `The product was added successfully`,
                cartItems: []
            }
        },
        components: {
            BackButton,
            PageNotFound,
            CartButton
        },
        beforeCreate() {
            this.$store.commit('initializeStore')
        },
        mounted() {
            this.getProduct()

            this.cartItems = this.$store.state.cartItems
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
        methods: {
            async getProduct() {
                this.$store.commit('setIsLoading', true)

                const response = await axios.get(`/api/products/${this.$route.params.productId}`);
                const product = response.data;
                this.product = product

                document.title = this.product.title

                this.$store.commit('setIsLoading', false)
            },
            addToCart() {
                if (isNaN(this.quantity) || this.quantity < 1) {
                    this.quantity = 1
                }

                const item = {
                    uniqueId: Date.now(),
                    product: this.product,
                    quantity: this.quantity,
                }

                this.$store.commit('addToCart', item)

                this.snackbar = true
                setTimeout(() => {
                    this.snackbar = false
                }, 2000)
            }
        }
    }
</script>

<style lang="scss" scoped>
.detail__page {
    height: 100vh;

    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 70px 75px 70px;

        &_btn {
            width: 200px;
            height: 42px;
            color: #D58C51;
            background: transparent;
            border: 1px solid #D58C51;
        }
    }

    &-cart {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
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

    &-snackbar {
        position: fixed;
        right: 70px;
        bottom: 30%;
        min-height: 20px;
        z-index: 9999;
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
        margin-bottom: 10px;

        &_price {
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

        &_num {
            border: 1px solid white;
            color: #FFF;
            font-size: 20px;
            padding-left: 10px;
            margin-right: 10px;
            background-color: transparent;
            width: 60px;
            height: 30px;
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