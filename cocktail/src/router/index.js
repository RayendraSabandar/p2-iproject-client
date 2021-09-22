import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import LandingPage from '../views/LandingPage.vue'
import AddTag from '../views/AddTag.vue'
import DrinkDetail from '../views/DrinkDetail.vue'
import TaggedDrinks from '../views/TaggedDrinks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/addTag',
    name: 'AddTag',
    component: AddTag
  },
  {
    path: '/drinkDetail/:id',
    name: 'DrinkDetail',
    component: DrinkDetail
  },
  {
    path: '/taggedDrinks/drinkDetail/:id',
    name: 'DrinkDetail',
    component: DrinkDetail
  },
  {
    path: `/taggedDrinks/:name`,
    name: 'TaggedDrinks',
    component: TaggedDrinks
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const access_token = localStorage.getItem('access_token')
  const isPrivatePage = ['Register', 'Login'].includes(to.name)
  if(access_token){
    if(isPrivatePage){
      next({name : 'LandingPage'})
    } else {
      next()
    }
  } else {
    if(!isPrivatePage){
      next({name : 'Login'})
    } else {
      next()
    }
  }
})

export default router
