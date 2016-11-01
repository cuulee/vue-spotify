import {searchByType} from '../api'

export const searchByName = ({commit, state}, {name}) => {
  commit('requestSearchResults')
  if(name.length <= 0) {
    commit('receiveSearchResults', {results: []})
    return
  }
  return searchByType(name, state.activeSearchOption)
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
