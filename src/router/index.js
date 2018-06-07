import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/home'
import Index from '@/components/index'
import Login from '@/components/login'
import Register from '@/components/register'
import List from '@/components/list'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HelloWorld,
      children: [
        {
          path: '/',
          component: Login
        },
        {
          path: 'register',
          component: Register
        }
      ]
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '/',
          component: List
        },
        {
          path: 'write',
          component: Register
        }
      ]
    }
    // {
    //   path: '/home',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   children: [
    //     {
    //       path: '/',
    //       component: Login
    //     },
    //     {
    //       path: 'register',
    //       conponent: Register
    //     }
    //   ]
    // },
    // {
    //   path: '/index',
    //   name: 'Index',
    //   component: Index

    // }
  ]
})
