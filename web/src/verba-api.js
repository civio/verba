import axios from 'axios'

const VerbaAPI = {
  install(Vue, options) {
    Vue.verbaAPI = function (methodName, params, callback) {
      axios
        .get(process.env.VUE_APP_API_URL + methodName, { params })
        .then(callback)
    }
  }
}

export default VerbaAPI;