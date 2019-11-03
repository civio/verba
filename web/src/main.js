import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import { sync } from 'vuex-router-sync'

import App from './App.vue'
import Search from './Search.vue'
import Programmes from './Programmes.vue'
import About from './About.vue'

import DateRangePicker from '@gravitano/vue-date-range-picker'

Vue.use(DateRangePicker)

Vue.config.productionTip = false

// Utility function used by different components
Vue.filter('formatTime', time => {
  const min = Math.floor(time / 60)
  const sec = time % 60
  return `${min}'${sec < 10 ? '0' + sec : sec}''`
})

// Routing setup.
// Note: We make the router global to use it from the store.
// Is this good? :shrug: https://stackoverflow.com/a/40768840
global.router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Search,
      name: 'search'
    },
    {
      path: '/programmes',
      component: Programmes,
      name: 'programmes'
    },
    {
      path: '/about',
      component: About,
      name: 'about'
    }
  ]
})
sync(store, global.router)
Vue.use(VueRouter)

// Launch the app
new Vue({
  router: global.router,
  store,
  render: h => h(App)
}).$mount('#app')
