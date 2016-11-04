export default {
  REQUEST_SEARCH_RESULTS: (state) => {
    state.displaySearchTypes = false
    state.isBusy = true
    state.results = []
  },

  RECEIVE_SEARCH_RESULTS: (state, {results}) => {
    state.results = results
    state.isBusy = false
  },

  SET_QUERY: (state, {query}) => {
    state.query = query
  },

  SET_ACTIVE_SEARCH_TYPE: (state, {searchType}) => {
    state.activeSearchType = searchType
  },

  TOGGLE_DISPLAY_SEARCH_TYPES: (state) => {
    state.displaySearchTypes = !state.displaySearchTypes
  },

  INCREMENT_PAGE: (state) => {
    state.page += 1
  },

  DECREMENT_PAGE: (state) => {
    state.page = state.page > 1 ? state.page - 1 : state.page
  },
  
  RESET_PAGE_COUNT: (state) => {
    state.page = 1;
  }
}
