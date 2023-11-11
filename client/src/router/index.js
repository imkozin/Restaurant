import { createRouter, createWebHistory } from 'vue-router'
import ShoppingCartPage from '../pages/ShoppingCartPage.vue'
import ProductsPage from '../pages/ProductsPage.vue'
import ProductDetailPage from '../pages/ProductDetailPage.vue'
import PageNotFound from '../pages/PageNotFound.vue'
import SignupPage from '../pages/SignupPage.vue'
import LoginPage from '../pages/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'products',
    component: ProductsPage,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupPage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/products/:productId',
    name: 'productdetails',
    component: ProductDetailPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCartPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
