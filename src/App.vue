<script>
import Search from './components/Search.vue'
import SearchResults from './components/SearchResults.vue'

export default {
  name: 'app',
  components: [
    Search,
    SearchResults
  ],
  render (h) {
    return (
      <div id='app'>
        <Search />
        <SearchResults />
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
  margin: 0.5em;
}

input[type=text] {
  background: #303030;
  border-color: rgba(255, 255, 255, 0.5);
  color: #FFFFFF;
  font-family: monospace;
  font-size: 20px;
  opacity: 0.7;
}

a {
  color: #42b983;
}
</style>
