<template>
  <div class="d-flex justify-content-center align-items-center" style="padding:50px 175px; height: 100vh;">
      <div class="d-flex justify-content-center align-items-center w-100 shadow-lg h-100">
          <div class="px-5 py-3 left w-50">
              <div class="py-2 d-flex flex-row justify-content-between">
                  <div class="p-2">
                      <img src="@/assets/cocktailLogo.png">
                  </div>
                  <div class="p-2 d-flex justify-content-between align-items-center">
                      <div class="p-1">
                          <router-link to="/login">Sign In</router-link>
                      </div>
                      <div class="p-1">
                          <router-link to="/register">Sign Up</router-link>
                      </div>
                  </div>
              </div>
              <div class="py-3 text-left">
                  <h2>Sign In</h2>
                  <h5>Sign in to continue to our website</h5>
              </div>
              <div class="my-3">
                  <form @submit.prevent="handleLogin">
                        <div class="my-3">
                            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address">
                        </div>
                        <div class="my-3">
                            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <div v-if="errorLogin">
                            <p>{{errorLogin}}</p>
                        </div>
                        <div class="pt-5">
                            <button type="submit" class="btn login-button">Login</button>
                        </div>
                  </form>
              </div>
          </div>
          <div class="p-2 right w-50 d-flex flex-column justify-content-center align-items-center">
              <img src="@/assets/login.svg">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name : 'Login',
    data(){
        return {
            email : '',
            password: '',
        }
    },
    computed : {
        errorLogin(){
            return this.$store.state.errorLogin
        }
    },
    methods : {
        handleLogin(){
            const payload = {
                email : this.email,
                password : this.password
            }
            this.$store.dispatch('login', payload)
        }
    }
}
</script>

<style scoped>
.left {
    height: 100%
}

p {
    color: red;
}

.right {
    background-image: linear-gradient(to bottom right, #0F2E0E, #3a553a) ;
    height: 100%
}

img {
    width: 65px;
    height: 85px;
}

.right img {
    width: 300px;
    height: 300px;
}

.login-button {
    width: 100%;
    color: white;
    background-image: linear-gradient(to bottom left, #103410, #133E12);
}
</style>