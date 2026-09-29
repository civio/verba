import axios from 'axios'

const VerbaAPI = {
  install(Vue) {
    Vue.verbaDownloadURL = function (params) {
      return (
        import.meta.env.VUE_APP_API_URL +
        'search.csv?' +
        new URLSearchParams(params)
      )
    }
    Vue.verbaAPI = function (methodName, params, callback) {
      axios
        .get(import.meta.env.VUE_APP_API_URL + methodName, { params })
        .then(callback)
    }
  },
}

export default VerbaAPI
