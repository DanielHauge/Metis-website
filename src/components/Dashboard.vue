<template>
  <div class="container" id="Dashboard">
    <div class="card mx-auto bg-dark">
      <div class="card-header mx-auto bg-dark">
      </div>
      <div class="card-body">
        <overview></overview>
      </div>
      <br/>
      <input type="submit" name="btn" value="Logout" class="btn btn-outline-danger form-control login_btn" v-on:click="logout">
    </div>
  </div>
</template>

<script>
import Overview from '@/components/Overview'
export default {
  components: {Overview},
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style scoped>

</style>
