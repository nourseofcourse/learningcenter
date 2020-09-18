<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Welcome back, {{ loggedInUser.name }}</h3>
      </b-col>
    </b-row>
  </b-container>
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
    }
  }
</script>

<style lang="scss" scoped>

</style>
