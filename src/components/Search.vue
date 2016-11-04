<template lang='pug'>
  div.search-box
    input(type='text' v-model='query' tabindex=1)
    search-button.right-spacing(v-bind:searchTypes='searchTypes' v-bind:search='search')
</template>

<script>
import SearchButton from './SearchButton.vue'
import actions from '../store/actionTypes'

export default {
  name: 'search-box',
  components: {
    'search-button': SearchButton
  },
  data () {
    return {
      query: '',
      searchTypes: [
        'Artist',
        'Album',
        'Track'
      ]
    }
  },
  methods: {
    search () {
      this.$store.dispatch(actions.CHANGE_QUERY_TEXT, {query: this.query})
    }
  }
}
</script>

<style>
input[type=text] {
  background: #303030;
  border-radius: 4px;
  border-color: rgba(255, 255, 255, 0.5);
  color: #FFFFFF;
  font: 20px monospace;
  height: 44px;
  opacity: 0.7;
  text-indent: 0.2em;
  vertical-align: top;
  width: calc(100% - 5.25em);
  -webkit-appearance: none;
  -webkit-box-sizing: border-box;
}
.search-box {
  background: #303030;
  padding: 0.25em 0 0.25em 0.25em;
  position: fixed;
  width: 100%;
  z-index: 1;
}
.right-spacing {
  margin-right: 0.5em;
}
</style>
