<template>
    <div class="col-3 mb-3">
        <div class="card" style="width: 14rem;">
            <img :src="drink.strDrinkThumb" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{drink.strDrink}}</h5>
                <p class="card-text">{{drink.strCategory}} <br> {{drink.strAlcoholic}} <br> {{drink.strGlass}}</p>
                <a href="#" class="btn detail-button">See Detail</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['drink']
}
</script>

<style scoped>
.detail-button {
    width: 100%;
    color: white;
    background-image: linear-gradient(to bottom left, #103410, #133E12);
}
</style>