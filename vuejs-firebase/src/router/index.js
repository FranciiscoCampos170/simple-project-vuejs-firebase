import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Employers from '@/components/Employers'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Employer',
      component: Employers
    },
    {
      path: '/create',
      name: 'Create',
      component: Create,
      props: true
    }
  ]
})
