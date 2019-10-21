import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

import App from './App.vue'
import Search from './Search.vue'
import Foo from './Foo.vue'

import DateRangePicker from '@gravitano/vue-date-range-picker'

Vue.use(DateRangePicker)

Vue.config.productionTip = false

// Utility function used by different components
Vue.filter('formatTime', time => {
  const min = Math.floor(time / 60)
  const sec = time % 60
  return `${min}'${sec < 10 ? '0' + sec : sec}''`
})

// Routing setup
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Search,
      name: 'root'
    },
    {
      path: '/foo',
      component: Foo,
      name: 'foo'
    }
  ]
})
Vue.use(VueRouter)

// Launch the app
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
