import Vue from 'vue'
import Vuex from 'vuex'
import http from '../lib/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDetail : {
      access_token : '',
      email : '',
      id : 0
    },
    searchResult: []
  },
  mutations: {
    SET_USER_DETAIL(state, payload){
      state.userDetail.access_token = payload.access_token
      state.userDetail.email = payload.email
      state.userDetail.id = payload.id
    },
    CHANGE_PAGE(state, payload){
      router.push({ name: payload})
    },
    SET_SEARCH_RESULT(state, payload){
      state.searchResult = payload
    }
  },
  actions: {
    async register(context, payload){
      try {
        const user = await http({
          method : 'post',
          url : 'users/register',
          data : payload
        })
        if(user){
          router.push({ name : 'Login'})
        }
      } catch (err) {
        console.log(err.response);
      }
    },

    async login(context, payload){
      try {
        const user = await http({
          method : 'post',
          url : `users/login`,
          data : payload
        })
        localStorage.setItem('access_token', user.data.access_token)
        localStorage.setItem('email', user.data.email)
        localStorage.setItem('user_id', user.data.id)
        context.commit('SET_USER_DETAIL', user.data)
        router.push({ name : 'LandingPage'})
      } catch (err) {
        console.log(err);
      }
    },
    async searchByName(context, payload){
      try {
        const access_token = localStorage.getItem('access_token')
        const cocktail = await http({
          method : 'get',
          url : `cocktails/searchByName/${payload}`,
          headers : {
            access_token
          }
        })
        context.commit('SET_SEARCH_RESULT', cocktail.data)
      } catch (err) {
        console.log(err);
      }
     
    }
  },
  modules: {
  }
})
