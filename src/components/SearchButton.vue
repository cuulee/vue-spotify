<script>
import {mapGetters} from 'vuex'
export default {
  name: 'search-button',
  props: [
    'options',
    'search'
  ],
  computed: mapGetters({
    displaySearchOptions: 'displaySearchOptions',
    activeSearchOption: 'activeSearchOption'
  }),
  methods: {
    toggleSearchOptions () {
      this.$store.commit('setDisplaySearchOptions', {
        displaySearchOptions: !this.displaySearchOptions
      })
    },
    setActiveSearchOption (searchOption) {
      this.$store.dispatch('changeActiveSearchOption', {searchOption})
    }
  },
  render (h) {
    return (
      <div class='btn-group'>
        <button on-click={this.search}>
          <i class='fa fa-search' />
        </button>
        <button class='dropdown-toggle' on-click={this.toggleSearchOptions}>
          <i class='fa fa-caret-down' />
        </button>
        { this.displaySearchOptions ?
          <ul>
            { this.options.map((item) => {
                return (
                  <li>
                    <a class={this.activeSearchOption === item ? 'active' : null}
                      on-click={this.setActiveSearchOption.bind(this, item)}>
                      {item}
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
