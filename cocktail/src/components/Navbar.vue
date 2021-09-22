<template>
    <nav class="navbar d-flex align-items-between justify-content-between navbar-expand-lg navbar-light bg-light">
        <div class="p-2 d-flex-column">
            <div >
                <h3>{{menu}}</h3>
            </div>
            <div >
                <h5>{{subMenu}}</h5>
            </div>
        </div>
        <div class="p-2 d-flex">
            <div class="p-2 d-flex align-items-center">
                <h3>{{username}}</h3>
            </div>
            <div class="p-2">
                <img src="@/assets/avatar.png">
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    computed : {
        menu(){
            const menu = this.$store.state.menu
            if(menu === 'Search By' || menu === 'Filter By'){
                return menu
            } 
            else if(menu === 'Add Tag'){
                return menu
            } else {
                return this.$store.state.drinkDetail.cocktailDetail.strDrink
            }
        },
        subMenu(){
            const menu = this.$store.state.menu
            if(menu === 'Search By' || menu === 'Filter By'){
                return this.$store.state.searchBy
            } 
            else if(menu === 'Add Tag'){
                return 'Only 1 Word is Permitted'
            } else {
                return this.$store.state.drinkDetail.cocktailDetail.strAlcoholic
            }
        },
        username(){
            return localStorage.getItem('email').split('@')[0]
        },
        
    }

}
</script>

<style scoped>
    img {
        height: 50px;
        width: 50;
    }
</style>