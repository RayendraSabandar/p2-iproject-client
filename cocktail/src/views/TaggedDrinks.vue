<template>
  <div class="d-flex parent">
      <side-bar></side-bar>
      <div class="d-flex flex-column content-page h-100">
          <nav-bar></nav-bar>
          <div class="container">
              <div class="row">
                  <tagged-cards v-for="drink in drinks" :key="drink.idDrink" :drink="drink"></tagged-cards>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import NavBar from '../components/Navbar.vue'
import TaggedCards from '../components/TaggedCards.vue'
export default {
    name : 'TaggedDrinks',
    created(){
        this.fetchTags()
    },
    computed : {
        drinks(){
            return this.$store.state.taggedDrinks
        },
        tags(){
            return this.$store.state.tags
        }
    },
    components : { SideBar, NavBar, TaggedCards },
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