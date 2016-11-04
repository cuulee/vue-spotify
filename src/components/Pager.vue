<script>
import {mapActions, mapGetters, mapState} from 'vuex'
import actions from '../store/actionTypes'

export default {
  name: 'pager',
  computed: {
    ...mapState([
      'page'
    ]),
    ...mapGetters([
      'disableNextPage',
      'disablePreviousPage'
    ])
  },
  methods: {
    ...mapActions([
      actions.NEXT_PAGE,
      actions.PREVIOUS_PAGE
    ])
  },
  render (h) {
    return (
      <div class='pager'>
        <div class='btn-group right-spacing'>
          <button on-click={this.PREVIOUS_PAGE} disabled={this.disablePreviousPage} class='right-spacing'>
            <i class='fa fa-chevron-left' />
          </button>
          <span class='right-spacing'>{this.page}</span>
          <button on-click={this.NEXT_PAGE} disabled={this.disableNextPage}>
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
  width: 100%;
  z-index: 1;
}
.right-spacing {
  margin-right: 0.25em;
}
</style>
