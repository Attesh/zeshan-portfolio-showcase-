import Index from '@/pages/Index.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index,
    meta: {
      title: 'Home Page',
      requiresAuth: false
    }
  },
  // Other routes would go here...
 {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: 'Page Not Found' }
  }
  
]

export default routes