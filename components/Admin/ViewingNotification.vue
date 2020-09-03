<template>
  <b-container>
    <b-alert show variant="warning" v-if="viewingAsAdvisor">Currently viewing the site as {{ switchedUser.display_name }}. <nuxt-link @click.native="toggleUser" to="">Back to admin.</nuxt-link></b-alert>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters( [ 'viewingAsAdvisor', 'isAuthenticated', 'switchedUser' ])
    },
    methods: {
      toggleUser() {
        this.$store.dispatch('switchUser', this.$store.state.auth.user.id)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
