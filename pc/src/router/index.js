import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Photography from '../views/Photography.vue'
import Travel from '../views/Travel.vue'
import Fashion from '../views/Fashion.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Single from '../views/Single.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/photography',
    name: 'Photography',
    component: Photography
  },
  {
    path: '/travel',
    name: 'Travel',
    component: Travel
  },
  {
    path: '/fashion',
    name: 'Fashion',
    component: Fashion
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    //path: '/single/:articleId',
    path: '/single',
    name: 'Single',
    component: Single
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
