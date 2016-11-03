<script>
import Pager from './components/Pager.vue'
import Search from './components/Search.vue'
import SearchResults from './components/SearchResults.vue'

export default {
  name: 'app',
  components: [
    Pager,
    Search,
    SearchResults
  ],
  render (h) {
    return (
      <div id='app'>
        <Search />
        <SearchResults />
        <Pager />
      </div>
    )
  }
}
</script>

<style>
body {
  background: #303030;
  color: #FFFFFF;
  font-family: monospace;
  font-size: 20px;
  margin: 0;
  overflow-x: hidden;
}
a {
  color: #42b983;
}
button {
  background-color:  #328C63;
  border: 1px solid #225f43;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 20px;
  height: 44px;
  margin: 0;
  padding: 0;
  width: 44px;
  -webkit-appearance: none;
  -webkit-box-sizing: border-box;
}
button:active {
  opacity: 0.7;
}
button:focus {
  outline: 0;
}
.btn-group {
  float: right;
}
</style>
