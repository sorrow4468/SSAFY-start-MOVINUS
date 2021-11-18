import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from '@/views/movies/MovieList'
import Signup from '@/views/accounts/Signup'
import Login from '@/views/accounts/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/accounts',
    name: 'Accounts',
  },
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '',
    name: 'MovieList',
    component: MovieList,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
