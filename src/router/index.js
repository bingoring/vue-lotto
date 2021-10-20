import Vue from 'vue'
import Router from 'vue-router'
import LottoGenerator from '@/components/LottoGenerator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/lotto',
      name: 'LottoGenerator',
      component: LottoGenerator
    }
  ]
})
