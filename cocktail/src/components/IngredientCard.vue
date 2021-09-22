<template>
    <div class="col-4">
        <div>
            <img :src="'https://www.thecocktaildb.com/images/ingredients/' + ingredient.ingredient + '-Small.png'" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ingredient.ingredient}}</h5>
                <p class="card-text">{{ingredient.measure}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['ingredient']
}
</script>

<style scoped>
img {
    width: 200px;
    height: 200px;
}
</style>