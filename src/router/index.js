import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Optional: Better navigation experience
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

// Optional: Global navigation guards
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Your Default Title'
  next()
})

export default router