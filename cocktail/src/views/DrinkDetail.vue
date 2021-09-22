<template>
<div class="d-flex parent">
      <side-bar></side-bar>
      <div class="d-flex flex-column content-page h-100">
            <nav-bar></nav-bar>
            <div class="col p-2">
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
                                <b-dropdown id="dropdown-1" text="Add To" class="m-md-2">
                                    <b-dropdown-item v-for="tag in tags" :key="tag.id" @click.prevent="handleAddToTag(tag.id)">{{tag.name}}</b-dropdown-item>
                                </b-dropdown>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                        <ingredient-card v-for="ingredient in ingredients" :key="ingredient.ingredient" :ingredient="ingredient"></ingredient-card>
                </div>
            </div>
            <div class="px-3 py-5" >
                <div class="shadow-lg p-3">
                    <div>
                        <h3><strong>Instructions</strong></h3>
                    </div>
                    <div>
                        <p>{{drinkDetail.cocktailDetail.strInstructions}}</p>
                    </div>
                </div>
            </div>
            <div>
                <h1>Video</h1>
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
        },
        ingredients(){
            return this.$store.state.drinkDetail.ingredientDetail
        },        
        tags(){
            return this.$store.state.tags
        }
    },
    methods : {
        handleAddToTag(id){
            this.$store.dispatch('addToTag', id)
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