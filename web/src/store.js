import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const API_URL = 'http://localhost:8888/'

export default new Vuex.Store({
  state: {
    loading: false,
    query: '',
    queryDate: null, // date.from - date.to
    results: null
  },
  actions: {
    search(context, payload) {
      context.commit('search', payload)
    },
    setQueryDate(context, payload) {
      context.commit('setQueryDate', payload)
    }
  },
  mutations: {
    search(state, payload) {
      state.loading = true
      state.query = payload // store query
      // set search params
      const params = {
        q: state.query
      }
      if (state.queryDate) {
        params.date_from = state.queryDate.from
        params.date_to = state.queryDate.to
      }
      // TODO! params size & page
      axios.get(API_URL + 'search', { params }).then(response => {
        state.results = response.data
        state.loading = false
      })
    },
    setQueryDate(state, payload) {
      state.queryDate = payload
    }
  }
})
