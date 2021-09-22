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
    searchResult: [],
    menu : 'Search By',
    searchBy : 'Name',
    drinkDetail : null,
    tags : [],
    taggedDrinks : []
  },
  mutations: {
    SET_USER_DETAIL(state, payload){
      state.userDetail.access_token = payload.access_token
      state.userDetail.email = payload.email
      state.userDetail.id = payload.id
    },
    SET_TAGS(state, payload){
      state.tags = payload
    },
    CHANGE_PAGE(state, payload){
      state.searchBy = payload
      if(payload === 'Name' || payload === 'Ingredients'){
        state.menu = 'Search By'
        router.push({ name : 'LandingPage'})
      } 
      else if(payload === 'IsAlcoholic' || payload === 'Glass' || payload === 'Category') {
        state.menu = 'Filter By'
        router.push({ name : 'LandingPage'})
      } 
      else if(payload === 'Add Tags'){
        state.menu = 'Add Tags'
        router.push({ name : 'AddTag'})
      }
      else if(payload === 'Tagged Drinks'){
        state.menu = payload
      }
      state.searchResult = []
    },
    SET_SEARCH_RESULT(state, payload){
      state.searchResult = payload
    },
    SET_DRINK_DETAIL(state, payload){
      state.drinkDetail = payload
      state.menu = payload.cocktailDetail.strDrink
    },
    SET_TAGGED_DRINKS(state, payload){
      state.taggedDrinks = payload
      state.menu = 'Tagged Drinks'
      state.searchBy = 'Test'
    },
    SET_LOGOUT_DATA(state){
      state.menu = 'Search By'
      state.searchBy = 'Name'
      state.userDetail = {
        access_token : '',
        email : '',
        id : 0
      },
      state.searchResult = [],
      state.drinkDetail = null,
      state.tags = [],
      state.taggedDrinks = []
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

    logout(context){
      localStorage.clear()
      context.commit('SET_LOGOUT_DATA')
      router.push({name : 'Login'})
    },

    async fetchTags(context){
      const access_token = localStorage.getItem('access_token')
      try {
        const tags = await http({
          method : 'get',
          url : `tags/`,
          headers : {
            access_token
          }
        })
        context.commit('SET_TAGS', tags.data)
      } catch (err) {
        console.log(err);
      }
    },

    async addTag(context, payload){
      const name = payload
      const access_token = localStorage.getItem('access_token')
      try {
        const tag = await http({
          method : 'post',
          url : `tags/add`,
          data : {
            name
          },
          headers : {
            access_token
          }
        })
        if(tag){
          context.commit('CHANGE_PAGE', 'Name')
          router.push({name : 'LandingPage'})
        }
      } catch (err) {
        console.log(err);
      }
    },

    async addToTag(context, payload){
      const TagId = payload
      const id = localStorage.getItem('cocktail_id')
      const access_token = localStorage.getItem('access_token')
      try {
        const cocktail = await http({
          method : 'post',
          url : `cocktails/add/${id}`,
          headers : {
            access_token,
            TagId
          }
        })
        if(cocktail){
          router.push({ name : 'LandingPage'})
        }
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
    },

    async searchByIngredient(context, payload){
      try {
        const access_token = localStorage.getItem('access_token')
        const cocktail = await http({
          method : 'get',
          url : `cocktails/searchByIngredient/${payload}`,
          headers : {
            access_token
          }
        })
        context.commit('SET_SEARCH_RESULT', cocktail.data)
      } catch (err) {
        console.log(err);
      }
    },

    async filterByIsAlcoholic(context, payload){
      try {
        const access_token = localStorage.getItem('access_token')
        const cocktail = await http({
          method : 'get',
          url : `cocktails/filterByType/${payload}`,
          headers : {
            access_token
          }
        })
        context.commit('SET_SEARCH_RESULT', cocktail.data)
      } catch (err) {
        console.log(err);
      }
    },

    async filterByGlass(context, payload){
      try {
        const access_token = localStorage.getItem('access_token')
        const cocktail = await http({
          method : 'get',
          url : `cocktails/filterByGlass/${payload}`,
          headers : {
            access_token
          }
        })
        context.commit('SET_SEARCH_RESULT', cocktail.data)
      } catch (err) {
        console.log(err);
      }
    },

    async filterByCategory(context, payload){
      try {
        const access_token = localStorage.getItem('access_token')
        const cocktail = await http({
          method : 'get',
          url : `cocktails/filterByCategory/${payload}`,
          headers : {
            access_token
          }
        })
        context.commit('SET_SEARCH_RESULT', cocktail.data)
      } catch (err) {
        console.log(err);
      }
    },

    async fetchCocktails(context, payload){
      const access_token = localStorage.getItem('access_token')
      const name = payload
      try {
        const cocktails = await http({
          method : 'get',
          url : `tags/${name}`,
          headers : {
            access_token
          }
        })
        context.commit('SET_TAGGED_DRINKS', cocktails.data[0].Cocktails)
        router.push({ path : `/taggedDrinks/${name}`})
      } catch (err) {
        console.log(err);
      }
    },

    async drinkDetail(context, payload){
      const id = payload
      const access_token = localStorage.getItem('access_token')
      try {
        const cocktail = await http({
          method : 'get',
          url : `cocktails/searchById/${id}`,
          headers : {
            access_token
          }
        })
        localStorage.setItem('cocktail_id', cocktail.data.cocktailDetail.idDrink)
        context.commit('SET_DRINK_DETAIL', cocktail.data)
        router.push({ path : `drinkDetail/${id}`})
      } catch (err) {
        console.log(err);
      }
    }
  },
  modules: {
  }
})
