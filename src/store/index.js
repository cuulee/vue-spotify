import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  activeSearchType: 'Artist',
  displaySearchTypes: false,
  isBusy: false,
  limit: 10,
  page: 1,
  query: '',
  results: []
}

export default new Vuex.Store({
  actions,
  mutations,
  getters,
  state
})
