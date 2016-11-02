import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  activeSearchOption: 'Artist',
  displaySearchOptions: false,
  isBusy: false,
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
