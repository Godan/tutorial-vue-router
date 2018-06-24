import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index-page',
      component: require('@/components/index').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: 'fuga',
      name: 'fuga-view',
      component: require('@/components/fuga').default
    },
    {
      path: '/hoge/:value',
      name: 'hoge-view',
      component: require('@/components/hoge').default
    }
  ]
})
