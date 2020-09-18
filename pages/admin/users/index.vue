<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Courses</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table striped hover :items="users" :fields="fields">
          <template v-slot:cell(roles)="data">
            {{ data.value[0] }}
          </template>
          <template v-slot:cell(data.ID)="data">
            <button @click.prevent="switchUserTo(data.value)">Switch To</button>
          </template>
        </b-table>
        <nuxt-link :to="'/admin/users/add'">Add User</nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: "Users",
    layout: 'admin',
    middleware: ['admin'],
    data() {
      return {
        fields: [
          { key: 'data.display_name', label: 'Name' },
          { key: 'data.user_email', label: 'Email Address' },
          { key: 'data.user_login', label: 'Login' },
          { key: 'roles', label: 'Role' },
          { key: 'data.ID', label: 'Actions' }
        ]
      }
    },
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
    methods: {
      async switchUserTo(id) {
        await this.$store.dispatch('switchUser', id)
      }
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
