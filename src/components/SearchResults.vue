<script>
import {mapGetters} from 'vuex'

import SearchResult from './SearchResult.vue'

export default {
  name: 'search-results',
  components: [
    SearchResult
  ],
  computed: mapGetters({
    results: 'results',
    isBusy: 'isBusy'
  }),
  render (h) {
    return (
      <div class='search-results'>
        {this.isBusy
          ? <div class='loading-overlay'>
              <i class="loading fa fa-spinner fa-pulse fa-4x fa-fw"></i>
            </div>
          : this.results.map((item) => <SearchResult result={item} />)
        }
      </div>
    )
  }
}
</script>

<style>
.search-results {
  padding: 0.5em 0.5em 0 0;
}
.loading-overlay {
  background-color: #000;
  height: 100%;
  margin-left: -0.5em;
  opacity: 0.3;
  position: fixed;
  width: 100%;
  z-index: 1;
}
.loading {
  left: 50%;
  margin: -0.75em 0 0 -0.75em;
  position: fixed;
  top: 50%;
}
</style>
