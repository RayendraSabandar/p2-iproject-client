<template>
  <div class="d-flex flex-column sidebar-green h-100">
          <div class="py-2">
              <img src="@/assets/cocktailLogoWhite.png">
          </div>
          <div class="py-2 d-flex flex-column">
              <div class="d-flex flex-column justify-content-between text-right p-3">
                  <h4>SEARCH BY</h4>
                  <div>
                    <button @click.prevent="handleButton('name')" type="button" class="btn">NAME</button>
                  </div>
                  <div>
                    <button @click.prevent="handleButton('ingredients')" type="button" class="btn">INGREDIENTS</button>
                  </div>
              </div>
              <div class="text-right p-3">
                  <h4>FILTER BY</h4>
                  <div>
                    <button @click.prevent="handleButton('isAlcoholic')" type="button" class="btn">ISALCOHOLIC</button>
                  </div>
                  <div>
                    <button @click.prevent="handleButton('glass')" type="button" class="btn">GLASS</button>
                  </div>
                  <div>
                    <button @click.prevent="handleButton('category')" type="button" class="btn">CATEGORY</button>
                  </div>
              </div>
              <div class="text-right p-3">
                  <h4>MY DRINKS</h4>
                  <div>
                    <button @click.prevent="handleButton('wedding')" type="button" class="btn">WEDDING</button>
                  </div>
                  <div>
                    <button @click.prevent="handleButton('casual')" type="button" class="btn">CASUAL</button>
                  </div>
                  <div>
                    <button @click.prevent="handleButton('addTag')" type="button" class="btn">ADD TAG</button>
                  </div>
              </div>
          </div>        
      </div>
</template>

<script>
export default {
    name: 'SideBar',
    methods : {
        handleButton(payload){
          this.$store.commit('CHANGE_PAGE', payload)
        }
    }
}
</script>

<style scoped>
.sidebar-green {
    background-color:#0F430E;
    width: 15%;
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