<script>
import {mapGetters} from 'vuex'
export default {
  name: 'pager',
  computed: mapGetters({
    page: 'page'
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
    return (
      <div class='pager'>
        <div class='btn-group right-spacing'>
          <button on-click={this.decrementPage} class='right-spacing'><i class='fa fa-chevron-left' /></button>
          <span>{this.page}</span>
          <button on-click={this.incrementPage}><i class='fa fa-chevron-right' /></button>
        </div>
      </div>
    )
  }
}
</script>

<style scoped>
span {
  margin-right: 0.25em;
  padding: 0;
}
.pager {
  background: #303030;
  padding: 0.25em 0;
  position: fixed;
  top: calc(100% - 54px);
  width: 100%;
  z-index: 1;
}
.right-spacing {
  margin-right: 0.25em;
}
</style>
