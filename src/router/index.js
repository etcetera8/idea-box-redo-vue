import Vue from 'vue'
import Router from 'vue-router'
import IdeaList from '@/components/IdeaList'
import Controller from '@/components/Controller'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IdeaList',
      component: IdeaList
    }
  ]
})
