import { createRouter, createWebHistory } from 'vue-router'
import ShoppingCartPage from '../pages/ShoppingCartPage.vue'
import ProductsPage from '../pages/ProductsPage.vue'
import ProductDetailPage from '../pages/ProductDetailPage.vue'

const routes = [
  {
    path: '/products',
    name: 'products',
    component: ProductsPage
  },
  {
    path: '/products/:productId',
    name: 'productdetails',
    component: ProductDetailPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCartPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
