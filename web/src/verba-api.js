import axios from 'axios'
import querystring from 'querystring'

const VerbaAPI = {
  install(Vue) {
    Vue.verbaDownloadURL = function (params) {
      return (
        process.env.VUE_APP_API_URL +
        'search.csv?' +
        querystring.stringify(params)
      )
    }
    Vue.verbaAPI = function (methodName, params, callback) {
      axios
        .get(process.env.VUE_APP_API_URL + methodName, { params })
        .then(callback)
    }
  },
}

export default VerbaAPI
