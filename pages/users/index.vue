<template>
  <div>
    <ul>
      <li v-for="(user, index) in users" :key="index" :user="user">{{ user.data.user_nicename }}</li>
    </ul>
    <nuxt-link :to="'/users/add'">Add User</nuxt-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: "Users",
    head() {
      return {
        title: 'Users'
      }
    },
    computed: {
      ...mapState({
        users: store => store.users.all
      })
    },
    async fetch({ store, error }) {
      try {
        await store.dispatch('users/fetchUsers')
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch users at this time. Please try again later.'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
