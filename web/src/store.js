import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentResult: null,
    loading: false,
    query: '',
    queryDate: null, // date.from - date.to
    queryTerms: [],
    results: null,
    resultsPage: 0
  },
  actions: {
    initializeSearchFromURL({ commit }) {
      commit('setQuery', this.state.route.query.q)
      commit('setResultsPage', 0) // clear results page
      commit('search')
    },
    search({ commit }, payload) {
      commit('setQuery', payload)
      commit('setResultsPage', 0) // clear results page
      commit('search')
      // Store the query in the URL also
      global.router.push({ query: { q: this.state.query } })
    },
    setCurrentResult({ commit }, payload) {
      commit('setCurrentResult', payload)
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
      // skip if query is empty
      if (state.query.trim() === '') {
        state.results = null
        return
      }
      // set search params
      const params = {
        q: state.query,
        page: state.resultsPage,
        aggregations: 'week' // TODO: Activate aggregations only when needed (when query changes)
      }
      if (state.queryDate) {
        params.date_from = moment(state.queryDate.from).format('YYYY-MM-DD')
        params.date_to = moment(state.queryDate.to).format('YYYY-MM-DD')
      }
      // search request
      state.loading = true
      Vue.verbaAPI('search', params, response => {
        state.results = response.data
        state.loading = false
      })
    },
    setCurrentResult(state, payload) {
      state.currentResult = payload
    },
    setQuery(state, payload) {
      payload = payload || ''
      state.query = payload.trim() // store query

      // Set queryTerms (get terms array from query)
      const re = new RegExp(/"(.*?)"/g) // regexp for words between doubled quotes

      // extract single words in query (removing words between doubled quotes)
      const singleWords = state.query
        .replace(re, '') // remove words between quotes
        .replace(/\+|\(|\)|"|\|/g, '') // remove chars +()"|
        .trim()
      state.queryTerms =
        singleWords !== ''
          ? singleWords.split(/\s+/) // split by whitespaces avoiding empty tokens
          : []

      // concat to queryTerms words between doubled quotes
      const quotedWords = state.query.match(re)
      if (quotedWords) {
        state.queryTerms = state.queryTerms.concat(
          quotedWords.map(term => term.replace(/"/g, '').trim()) // clear words (remove doubled quotes & extra spaces)
        )
      }
    },
    setQueryDate(state, payload) {
      state.queryDate = payload
    },
    setResultsPage(state, payload) {
      state.resultsPage = payload
    }
  }
})
