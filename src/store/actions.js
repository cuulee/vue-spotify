import {fetchTypeByName} from '../api'

// if(res.artists.items.length <= 0) {
//   commit('decrementPage')
//   results = state.results
// } else

export const searchByName = ({commit, state}, {query, searchOption} = {}) => {
  commit('requestSearchResults', {
    query: query ? query : state.query,
    searchOption: searchOption ? searchOption : state.activeSearchOption
  })
  if(state.query.length <= 0) {
    commit('receiveSearchResults', {results: []})
    commit('decrementPage')
    return
  }
  return fetchTypeByName(state.query, state.activeSearchOption, (state.page - 1) * 10)
    .then(res => {
      let results
      switch (state.activeSearchOption) {
        case 'Artist':
          results = res.artists.items
          break
        case 'Album':
          results = res.albums.items
          break
        case 'Track':
          results = res.tracks.items
          break;
        default:
          results = []
          break;
      }
      commit('receiveSearchResults', {results})
    })
}

export const changeActiveSearchOption = ({commit, dispatch, state}, {searchOption}) => {
  dispatch('searchByName', {searchOption})
}

export const nextPage = ({commit, dispatch, state}) => {
  commit('incrementPage')
  dispatch('searchByName')
}

export const previousPage = ({commit, dispatch, state}) => {
  commit('decrementPage')
  dispatch('searchByName')
}
