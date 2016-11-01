export const requestSearchResults = (state) => {
  state.displaySearchOptions = false
  state.isBusy = true
  state.results = []
}

export const receiveSearchResults = (state, {results}) => {
  state.results = results
  state.isBusy = false
}

export const setDisplaySearchOptions = (state, {displaySearchOptions}) => {
  state.displaySearchOptions = displaySearchOptions
}

export const setActiveSearchOption = (state, {option}) => {
  state.activeSearchOption = option
}
