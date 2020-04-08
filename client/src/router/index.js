import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'

Vue.use(VueRouter)

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   next()
// })

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'About',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    props: true,
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/secret',
    name: 'Secret',
    component: () => import(/* webpackChunkName: "secret" */ '../views/Secret.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
