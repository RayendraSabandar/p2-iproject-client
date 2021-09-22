<template>
  <div class="d-flex flex-column sidebar-green h-100">
          <div class="py-2">
              <img src="@/assets/cocktailLogoWhite.png">
          </div>
          <div class="py-2 d-flex flex-column">
              <div class="d-flex flex-column justify-content-between text-right p-3">
                  <h4>SEARCH BY</h4>
                  <div>
                    <button @click.prevent="handleButton('Name')" type="button" class="btn">NAME</button>
                  </div>
                  <div>
                    <button @click.prevent="handleButton('Ingredients')" type="button" class="btn">INGREDIENTS</button>
                  </div>
              </div>
              <div class="text-right p-3">
                  <h4>FILTER BY</h4>
                  <div>
                    <button @click.prevent="handleButton('IsAlcoholic')" type="button" class="btn">ISALCOHOLIC</button>
                  </div>
                  <div>
                    <button @click.prevent="handleButton('Glass')" type="button" class="btn">GLASS</button>
                  </div>
                  <div>
                    <button @click.prevent="handleButton('Category')" type="button" class="btn">CATEGORY</button>
                  </div>
              </div>
              <div class="text-right p-3">
                  <h4>MY DRINKS</h4>
                  <div v-for="tag in tags" :key="tag.id">
                    <button @click.prevent="handleTag(tag.name)" type="button" class="btn">{{tag.name}}</button>
                  </div>
                  <div>
                    <button @click.prevent="handleButton('Add Tags')" type="button" class="btn">ADD TAG</button>
                  </div>
              </div>
          </div>        
      </div>
</template>

<script>
export default {
    name: 'SideBar',
    computed : {
        tags(){
            return this.$store.state.tags.map(el => {
                el.name = el.name.toUpperCase()
                return el
            })
        }
    },
    methods : {
        handleButton(payload){
          this.$store.commit('CHANGE_PAGE', payload)
        },
        handleTag(payload){
          const lowerCase = payload.charAt(0) + payload.slice(1).toLowerCase()
          this.$store.dispatch('fetchCocktails', lowerCase)
        }
    }
}
</script>

<style scoped>
.sidebar-green {
    background-color:#0F430E;
    width: 16%;
    color: white;
}

img {
    width: 65px;
    height: 85px;
}

button {
    color: white;
}
</style>