import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LinkerView from '../views/LinkerView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/linker',
    name: 'linker',
    component: LinkerView
  },
  {
    path: '/comp',
    name:  'comp',
    component: () => import(/* webpackChunkName: "about" */ '../views/ComView.vue')
  },
  {
    path: '/design',
    name:  'design',
    component: () => import(/* webpackChunkName: "about" */ '../views/DesignView.vue'),

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
