import Vue from 'vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      
    ]
  })
  