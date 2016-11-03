<script>
import {mapGetters} from 'vuex'
export default {
  name: 'pager',
  computed: mapGetters({
    page: 'page',
    numberOfResults: 'numberOfResults'
  }),
  methods: {
    incrementPage () {
      this.$store.dispatch('nextPage')
    },
    decrementPage () {
      this.$store.dispatch('previousPage')
    }
  },
  render (h) {
    console.log(this.numberOfResults)
    return (
      <div class='pager'>
        <div class='btn-group right-spacing'>
          <button on-click={this.decrementPage} disabled={this.page === 1} class='right-spacing'>
            <i class='fa fa-chevron-left' />
          </button>
          <span class='right-spacing'>{this.page}</span>
          <button on-click={this.incrementPage} disabled={this.numberOfResults < 10}>
            <i class='fa fa-chevron-right' />
          </button>
        </div>
      </div>
    )
  }
}
</script>

<style scoped>
button[disabled] {
  box-shadow: none;
  cursor: not-allowed;
  opacity: 0.65;
}
.pager {
  background: #303030;
  padding: 0.25em 0;
  position: fixed;
  top: calc(100vh - 54px);
  width: 100%;
  z-index: 1;
}
.right-spacing {
  margin-right: 0.25em;
}
</style>
