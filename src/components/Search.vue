<template lang='pug'>
  div.search-box
    search-button(v-bind:options='options' v-bind:search='search')
    div.over-flowing
      input(type='text' v-model='name' tabindex=1)
</template>

<script>
import SearchButton from './SearchButton.vue'

export default {
  name: 'search-box',
  components: {
    'search-button': SearchButton
  },
  data () {
    return {
      name: '',
      options: [
        'Artist',
        'Album',
        'Track'
      ]
    }
  },
  methods: {
    search () {
      this.$store.dispatch('searchByName', {name: this.name})
    }
  }
}
</script>

<style scoped>
input[type=text] {
  border-radius: 4px;
  line-height: 1.75em;
  padding-left: 0.2em;
  width: 100%;
}
.over-flowing {
  overflow: hidden;
  padding-right: 0.7em;
}
</style>
