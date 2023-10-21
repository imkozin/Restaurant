<template>
    <div class="products__page">
        <div class="products__page-header">
            <h1 class="page-title">Our Products</h1>
            <router-link
            to="/cart"
            custom
            v-slot="{ navigate }"
            >
            <button @click="navigate" class="page-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <g clip-path="url(#clip0_1_89)">
                <path d="M20.0746 9.20414H16.1774L13.379 1.23897C13.2096 0.756825 12.6815 0.503193 12.1992 0.672633C11.717 0.842026 11.4635 1.37024 11.6329 1.85243L14.2157 9.2041H6.78427L9.36711 1.85243C9.5365 1.37024 9.28296 0.842026 8.80077 0.672633C8.31871 0.503193 7.79041 0.756825 7.62102 1.23897L4.82263 9.20414H0.925386C0.414318 9.20414 0 9.61841 0 10.1295C0 10.6406 0.414318 11.0549 0.925386 11.0549H1.17893L3.44649 19.3309C3.61625 19.9505 4.17934 20.38 4.82171 20.38H16.2413C16.8871 20.38 17.4522 19.946 17.6189 19.3221L19.8274 11.0549H20.0746C20.5857 11.0549 21 10.6406 21 10.1295C21 9.61846 20.5857 9.20414 20.0746 9.20414ZM7.46785 17.3549C7.46785 17.866 7.05353 18.2803 6.54246 18.2803C6.03139 18.2803 5.61708 17.866 5.61708 17.3549V12.6562C5.61708 12.1451 6.03139 11.7308 6.54246 11.7308C7.05353 11.7308 7.46785 12.1451 7.46785 12.6562V17.3549ZM11.4254 17.3549C11.4254 17.866 11.011 18.2803 10.5 18.2803C9.98891 18.2803 9.57459 17.866 9.57459 17.3549V12.6562C9.57459 12.1451 9.98891 11.7308 10.5 11.7308C11.011 11.7308 11.4254 12.1451 11.4254 12.6562V17.3549ZM15.3829 17.3549C15.3829 17.866 14.9686 18.2803 14.4575 18.2803C13.9464 18.2803 13.5321 17.866 13.5321 17.3549V12.6562C13.5321 12.1451 13.9464 11.7308 14.4575 11.7308C14.9686 11.7308 15.3829 12.1451 15.3829 12.6562V17.3549Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_1_89">
                <rect width="21" height="21" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </button>
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

    export default {
        name: "ProductsPage",
        

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