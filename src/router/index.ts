import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/technologies',
    name: 'Technologies',
    component: () => import(/* webpackChunkName: "Technologies" */ '../views/Technologies.vue')
  },
  {
    path: '/development',
    name: 'Development',
    component: () => import(/* webpackChunkName: "Development" */ '../views/Development.vue')
  },
  {
    path: '/our-partners',
    name: 'Our Partners',
    component: () => import(/* webpackChunkName: "Our Partners" */ '../views/Partners.vue')
  },
  {
    path: '/about-us',
    name: 'About Us',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
