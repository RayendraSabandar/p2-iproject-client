<template>
  <div class="d-flex parent">
      <side-bar></side-bar>
      <div class="d-flex flex-column content-page h-100">
          <div>
              Navbar
          </div>
          <div>
              <button @click.prevent="handleSearch('vodka')" type="button" class="btn">Search</button>
          </div>
          <div class="container">
              <div class="row">
                    <result-card v-for="drink in drinks" :key="drink.idDrink" :drink="drink"></result-card>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import ResultCard from '../components/ResultCards.vue'
import SideBar from '../components/SideBar.vue'
export default {
    name : 'LandingPage',
    computed : {
        drinks(){
            return this.$store.state.searchResult
        }
    },
    components : { ResultCard, SideBar },
    methods : {
        handleSearch(payload){
            this.$store.dispatch('searchByName', payload)
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