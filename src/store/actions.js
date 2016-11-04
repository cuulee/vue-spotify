import {fetchByType} from '../api'
import mutations from './mutationTypes'

const queryApi = (commit, state) => {
  commit(mutations.REQUEST_SEARCH_RESULTS)
  if(state.query.length <= 0) {
    commit(mutations.RECEIVE_SEARCH_RESULTS, {results: []})
    return
  }
  return fetchByType(state.query, state.activeSearchType, (state.page - 1) * state.limit)
    .then(res => {
      let results
      switch (state.activeSearchType) {
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
      commit(mutations.RECEIVE_SEARCH_RESULTS, {results})
    })
}

export const CHANGE_QUERY_TEXT = ({commit, state}, {query}) => {
  commit(mutations.SET_QUERY, {query})
  commit(mutations.RESET_PAGE_COUNT)
  queryApi(commit, state)
}

export const CHANGE_ACTIVE_SEARCH_TYPE = ({commit, state}, {searchType}) => {
  commit(mutations.SET_ACTIVE_SEARCH_TYPE, {searchType})
  commit(mutations.RESET_PAGE_COUNT)
  queryApi(commit, state)
}

export const NEXT_PAGE = ({commit, state}) => {
  commit(mutations.INCREMENT_PAGE)
  queryApi(commit, state)
}

export const PREVIOUS_PAGE = ({commit, state}) => {
  commit(mutations.DECREMENT_PAGE)
  queryApi(commit, state)
}
