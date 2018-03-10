import Vue from 'vue'
import Router from 'vue-router'
import IdeaList from '@/components/IdeaList'
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
