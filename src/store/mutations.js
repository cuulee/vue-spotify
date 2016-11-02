export const requestSearchResults = (state, {query, searchOption}) => {
  state.displaySearchOptions = false
  state.isBusy = true
  state.page = state.query !== query ||
    state.activeSearchOption !== searchOption ? 1 : state.page
  state.query = query
  state.results = []
  state.activeSearchOption = searchOption
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

export const incrementPage = (state) => {
  state.page = ++state.page
}

export const decrementPage = (state) => {
  state.page = state.page > 1 ? --state.page : state.page
}

export const resetPageCounter = (state) => {
  state.page = 1;
}
