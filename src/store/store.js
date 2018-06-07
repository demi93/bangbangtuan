import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

export default new vuex.Store({
  state: {
    login: false,
    register: false
  }
})
