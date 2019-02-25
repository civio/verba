import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.filter('formatDate', str => {
  const date = new Date(str)
  return `${date.toLocaleDateString('es-ES', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  })}`
})

Vue.filter('formatTime', time => {
  const min = Math.floor(time / 60)
  const sec = time % 60
  return `${min}'${sec < 10 ? '0' + sec : sec}''`
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
