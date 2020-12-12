import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import { sync } from 'vuex-router-sync'

import i18n from './i18n'
import App from './App.vue'
import Search from './Search.vue'
import ProgrammeList from './ProgrammeList.vue'
import Programme from './Programme.vue'
import About from './About.vue'
import Vignettes from './Vignettes.vue'
import VerbaAPI from './verba-api.js'

import DateRangePicker from '@gravitano/vue-date-range-picker'

Vue.use(DateRangePicker)

Vue.config.productionTip = false

// Utility functions used by different components
Vue.filter('formatTime', time => {
  const min = Math.floor(time / 60)
  const sec = time % 60
  return `${min}'${sec < 10 ? '0' + sec : sec}''`
})

Vue.filter('imageURL', programme => {
  // We don't have the URL in the database right now, so we generate it from its id,
  // which is not totally robust, but works ok right now.
  const filename = programme.title
    .toLowerCase()
    .replace(/[ /]/g, '-')
    .replace(/-+/g, '-')
  return `https://img2.rtve.es/v/${filename}_${programme.id}.png`
})

// Use a plugin to wrap all access to the API
Vue.use(VerbaAPI)

// Routing setup.
// Note: We make the router global to use it from the store.
// Is this good? :shrug: https://stackoverflow.com/a/40768840
global.router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search,
    },
    {
      path: '/programmes',
      name: 'programmes',
      component: ProgrammeList,
    },
    {
      path: '/programmes/:id',
      name: 'programme-details',
      component: Programme,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/vignettes',
      name: 'vignettes',
      component: Vignettes,
    },
  ],
})
sync(store, global.router)
Vue.use(VueRouter)

// Launch the app
new Vue({
  router: global.router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
