<template>
  <div>
    Welcome back, {{ loggedInUser.name }}

    <nuxt-link :to="{ name: 'courses' }">View all courses</nuxt-link>
    <div>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'dashboard',
    head() {
      return {
        title: 'Dashboard'
      }
    },
    computed: {
      ...mapGetters([
        'loggedInUser'
      ])
    },
    methods: {
      async logout() {
        await this.$auth.logout()
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
