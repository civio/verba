import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const API_URL = 'http://localhost:8888/'

export default new Vuex.Store({
  state: {
    query: '',
    loading: false,
    results: {}
  },
  actions: {
    search(context, payload) {
      context.commit('search', payload)
    }
  },
  mutations: {
    search(state, payload) {
      state.loading = true
      state.query = payload // store query
      axios
        .get(API_URL + 'search', {
          params: {
            q: state.query
          }
        })
        .then(response => {
          state.results = response.data
          state.loading = false
        })
    }
  }
})
