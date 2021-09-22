<template>
  <div class="d-flex parent">
      <side-bar></side-bar>
      <div class="d-flex flex-column content-page h-100 justify-content-between">
          <nav-bar></nav-bar>
          <search-by></search-by>
          <div class="container">
              <div class="row">
                    <result-card v-for="drink in drinks" :key="drink.idDrink" :drink="drink"></result-card>
              </div>
          </div>
      <HFooter></HFooter>
      </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import SearchBy from '../components/SearchBy.vue'
import ResultCard from '../components/ResultCards.vue'
import NavBar from '../components/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'
export default {
    name : 'LandingPage',
    created(){
        this.fetchTags()
    },
    computed : {
        drinks(){
            return this.$store.state.searchResult
        },
        tags(){
            return this.$store.state.tags
        }
    },
    components : { ResultCard, SideBar, SearchBy, NavBar, HFooter },
    methods : {
        fetchTags(){
            this.$store.dispatch('fetchTags')
        }
    }
}
</script>

<style scoped>

.parent {
    height: 100%;
    background-color:#0F430E;
}

.content-page {
    width: 95%;
    min-height: 100vh;
    background-color: white;
}


</style>