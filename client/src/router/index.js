import { createRouter, createWebHistory } from 'vue-router'
import ShoppingCartPage from '../pages/ShoppingCartPage.vue'
import ProductsPage from '../pages/ProductsPage.vue'
import ProductDetailPage from '../pages/ProductDetailPage.vue'
import PageNotFound from '../pages/PageNotFound.vue'

const routes = [
  {
    path: '/',
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
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
