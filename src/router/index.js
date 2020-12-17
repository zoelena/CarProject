import Vue from 'vue'
import Router from 'vue-router'
import CarsHome from '../views/CarsHome.vue'
// import Mileage from '../views/Mileage.vue'
// import Maintenance from '../views/Maintenance.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/carshome',
      name: 'carshome',
      component: CarsHome,
      meta: {
        requiresAuth: false
      }
    }
    // {
    //   path: '/mileage',
    //   name: 'mileage',
    //   component: Mileage,
    //   meta: {
    //     requiresAuth: false
    //   }
    // },
    // {
    //   path: '/repairs',
    //   name: 'repairs',
    //   component: Maintenance,
    //   meta: {
    //     requiresAuth: false
    //   }
    // }
  ]
})

export default router
