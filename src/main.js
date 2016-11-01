import Vue from 'vue'
import App from './App.vue'
import 'font-awesome/css/font-awesome.css'

import store from './store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
