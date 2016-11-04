export default {
  disableNextPage: state => state.results.length < 10,
  disablePreviousPage: state => state.page === 1
}
