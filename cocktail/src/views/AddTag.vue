<template>
  <div class="d-flex parent">
      <side-bar></side-bar>
      <div class="d-flex flex-column content-page h-100">
          <nav-bar></nav-bar>
          <div class="py-5">
            <div class="container d-flex flex-column p-4 shadow-lg h-100 w-50 ">
                <div class="text-left">
                    <h2>Enter Tag Name</h2>
                </div>
                <div>
                    <form @submit.prevent="handleAddTag">
                            <div class="my-2">
                                <input v-model="tagName" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g. Wedding">
                            </div>
                            <div class="pt-3">
                                <button type="submit" class="btn add-button">Add Tag</button>
                            </div>
                    </form>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import NavBar from '../components/Navbar.vue'
export default {
    name : 'AddTags',
    data(){
        return {
            tagName : ''
        }
    },
    components : { SideBar, NavBar },
    methods : {
        handleAddTag(){
            const tag = this.tagName
            this.$store.dispatch('addTag', tag)
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

.add-button {
    width: 100%;
    color: white;
    background-image: linear-gradient(to bottom left, #103410, #133E12);
}


</style>