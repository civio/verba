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
    results: null,
    resultsPage: 0
  },
  actions: {
    search({ commit }, payload) {
      commit('setQuery', payload)
      commit('setResultsPage', 0) // clear results page
      commit('search')
    },
    setQueryDate({ commit, state }, payload) {
      commit('setQueryDate', payload)
      commit('setResultsPage', 0) // clear results page
      if (state.query !== '') commit('search') // update search if query is defined
    },
    setResultsPage({ commit }, payload) {
      commit('setResultsPage', payload)
      commit('search') // update search
    }
  },
  mutations: {
    search(state) {
      // set search params
      const params = {
        q: state.query,
        page: state.resultsPage
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
    setQuery(state, payload) {
      state.loading = true
      state.query = payload // store query
    },
    setQueryDate(state, payload) {
      state.queryDate = payload
    },
    setResultsPage(state, payload) {
      state.resultsPage = payload
    }
  }
})
