<script>
import {mapActions, mapMutations, mapState} from 'vuex'
import mutations from '../store/mutationTypes'
import actions from '../store/actionTypes'

export default {
  name: 'search-button',
  props: [
    'searchTypes',
    'search'
  ],
  computed: mapState([
    'activeSearchType',
    'displaySearchTypes'
  ]),
  methods: {
    ...mapActions([
      actions.CHANGE_ACTIVE_SEARCH_TYPE
    ]),
    ...mapMutations([
      mutations.TOGGLE_DISPLAY_SEARCH_TYPES
    ])
  },
  render (h) {
    return (
      <div class='btn-group'>
        <button on-click={this.search}>
          <i class='fa fa-search' />
        </button>
        <button class='dropdown-toggle' on-click={this.TOGGLE_DISPLAY_SEARCH_TYPES}>
          <i class='fa fa-caret-down' />
        </button>
        { this.displaySearchTypes ?
          <ul>
            { this.searchTypes.map((searchType) => {
                return (
                  <li>
                    <a class={this.activeSearchType === searchType ? 'active' : null}
                      on-click={this.CHANGE_ACTIVE_SEARCH_TYPE.bind(this, {searchType})}>
                      {searchType}
                    </a>
                  </li>
                )
              })
            }
          </ul>
          : null
        }
      </div>
    )
  }
}
</script>

<style scoped>
ul {
  background-color: #303030;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  box-shadow: -0.3em 0.3em 0.5em rgba(0, 0, 0, 0.3);
  display: block;
  left: calc(100% - 8.5em);
  list-style: none;
  margin: 0.15em 0 0 0;
  padding: 0;
  position: absolute;
  width: 8em;
  z-index: 1;
}
a {
  color: #FFF;
  cursor: pointer;
  display: block;
  opacity: 0.7;
  padding: 0.3em 1em;
  white-space:nowrap;
}
.active {
  opacity: 1;
}
.btn-group>button:first-child:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.btn-group>button:last-child:not(:first-child) {
  border-left-width: 0;
}
.btn-group>.dropdown-toggle:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
</style>
