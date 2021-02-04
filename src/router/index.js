import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import Output from '@/components/Output' //①import


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

//②profile
   {
      path: '/outputs',
      name: 'Output',
      component: Output
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    }
  ]
})