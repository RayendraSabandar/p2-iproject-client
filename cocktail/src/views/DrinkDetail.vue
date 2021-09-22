<template>
<div class="d-flex parent">
      <side-bar></side-bar>
      <div class="d-flex flex-column content-page h-100">
          <nav-bar></nav-bar>
          <div class="col">
                        <div class="mb-3 text-left">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img :src="drinkDetail.cocktailDetail.strDrinkThumb" class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h4 class="card-title"><strong>{{drinkDetail.cocktailDetail.strDrink}}</strong></h4>
                                    <h6>{{drinkDetail.cocktailDetail.strCategory}}</h6>
                                    <h6>{{drinkDetail.cocktailDetail.strAlcoholic}}</h6>
                                    <h6>{{drinkDetail.cocktailDetail.strGlass}}</h6>
                                    <div>
                                        <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
                                            <b-dropdown-item>First Action</b-dropdown-item>
                                            <b-dropdown-item>Second Action</b-dropdown-item>
                                            <b-dropdown-item>Third Action</b-dropdown-item>
                                            <b-dropdown-divider></b-dropdown-divider>
                                            <b-dropdown-item active>Active action</b-dropdown-item>
                                            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                                        </b-dropdown>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                  </div>
          <div class="container">
              <div class="row">
                    <div class="col-3">
                        <ingredient-card></ingredient-card>
                    </div>
                    <div class="col-3">
                        <ingredient-card></ingredient-card>
                    </div>
                    <div class="col-3">
                        <ingredient-card></ingredient-card>
                    </div>
                    <div class="col-3">
                        <ingredient-card></ingredient-card>
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import IngredientCard from '../components/IngredientCard.vue'
import SideBar from '../components/SideBar.vue'
import NavBar from '../components/Navbar.vue'
export default {
    name : 'DrinkDetail',
    components : { IngredientCard, SideBar, NavBar },
    computed : {
        drinkDetail(){
            return this.$store.state.drinkDetail
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