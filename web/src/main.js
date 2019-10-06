import Vue from 'vue'
import App from './App.vue'
import store from './store'

import DateRangePicker from '@gravitano/vue-date-range-picker'

Vue.use(DateRangePicker)

Vue.config.productionTip = false

Vue.filter('formatTime', time => {
  const min = Math.floor(time / 60)
  const sec = time % 60
  return `${min}'${sec < 10 ? '0' + sec : sec}''`
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
