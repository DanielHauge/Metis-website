<template>
  <div class="container" id="loginForm">
    <div class="card card-login mx-auto text-center bg-dark">
      <div class="card-header mx-auto bg-dark">
        <div class="card-header mx-auto bg-dark">
          <span>
            <img src="https://amar.vote/assets/img/amarVotebd.png" class="w-75" alt="Logo"/>
          </span>
          <br/>
          <span class="logo_title mt-5"> Login </span>
          <div v-if="errorMessage">
            <span class="error">{{errorMessage}}</span>
          </div>
        </div>
        <div class="card-body">
          <form @submit.prevent="submit">
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
              </div>
              <input required type="text" class="form-control" placeholder="Username" v-model="form.username">
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input required type="password" class="form-control" placeholder="Password" v-model="form.password">
            </div>
            <div class="form-group">
              <input type="submit" name="btn" value="Login" class="btn btn-outline-danger float-right form-control login_btn">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      errorMessage: undefined
    }
  },

  methods: {
    async submit () {
      this.errorMessage = undefined
      let username = this.form.username
      let password = this.form.password
      this.$store.dispatch('login', { username, password })
        .then(() => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
          this.errorMessage = 'Incorrect Credentials'
        }
        )
    }
  }

}
</script>

<style scoped>

  .error{
    color: red;
  }

</style>
