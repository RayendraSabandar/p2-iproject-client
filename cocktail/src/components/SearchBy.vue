<template>
  <div class="search p-3">
                <form>
                    <div class="row mb-3">
                        <div v-if="this.searchBy === 'Name'" class="col-sm-4">
                            <input v-model="query" type="text" class="form-control" id="inputEmail3" placeholder="e.g.vodka">
                        </div>
                        <div v-if="this.searchBy === 'Ingredients'" class="col-sm-4">
                            <input v-model="query" type="text" class="form-control" id="inputEmail3" placeholder="e.g.orange">
                        </div>
                        <div v-if="this.searchBy === 'IsAlcoholic'" class="col-sm-4">
                            <input v-model="query" type="text" class="form-control" id="inputEmail3" placeholder="e.g.alcoholic">
                        </div>
                        <div v-if="this.searchBy === 'Glass'" class="col-sm-4">
                            <input v-model="query" type="text" class="form-control" id="inputEmail3" placeholder="e.g.cocktail glass">
                        </div>
                        <div v-if="this.searchBy === 'Category'" class="col-sm-4">
                            <input v-model="query" type="text" class="form-control" id="inputEmail3" placeholder="e.g.ordinary drink">
                        </div>
                        <div class="col-sm-1">
                            <button @click.prevent="handleSearch()" type="button" class="btn"><img src="@/assets/searchIcon.png"></button>
                        </div>
                    </div>
                </form>
          </div>
</template>

<script>
export default {
    data(){
            return {
                query : ''
            }
        },
    computed : {
        searchBy(){
            return this.$store.state.searchBy
        }
    },
    methods : {
        handleSearch(){
            const query = this.query
            if(this.searchBy === 'Name'){
                this.$store.dispatch('searchByName', query)
            } else if(this.searchBy === 'Ingredients'){
                this.$store.dispatch('searchByIngredient', query)
            } else if(this.searchBy === 'IsAlcoholic'){
                this.$store.dispatch('filterByIsAlcoholic', query)
            } else if(this.searchBy === 'Glass'){
                this.$store.dispatch('filterByGlass', query)
            } else if(this.searchBy === 'Category'){
                this.$store.dispatch('filterByCategory', query)
            }
        }
    }
}
</script>

<style scoped>
.search img {
    width: 15px;
    height: 15px;
}
</style>