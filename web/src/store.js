import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const API_URL = 'http://localhost:8888/'

export default new Vuex.Store({
  state: {
    results: []
  },
  actions: {
    search(context, payload) {
      context.commit('search', payload)
    }
  },
  mutations: {
    search(state, payload) {
      axios
        .get(API_URL + 'search', {
          params: {
            q: payload
          }
        })
        .then(response => {
          state.results = response.data
          console.log(state.results)
        })
    }
  }
})
