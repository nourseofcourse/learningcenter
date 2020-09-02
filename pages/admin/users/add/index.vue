<template>
  <div class="wrapper">
    <h2>Add User</h2>
    <form class="form-horizontal" method="post" @submit.prevent="addUser">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                name="display_name"
                v-on:keyup="createUsername"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="user_login">User Login</label>
              <input
                type="text"
                class="form-control"
                name="user_login"
                disabled
                :value="user_login"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="user_email">Email</label>
              <input type="email" class="form-control" name="user_email" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="user_nicename">Nicename</label>
              <input
                type="text"
                class="form-control"
                name="user_nicename"
                :value="user_login"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="group">Group</label>
              <select name="group" class="form-control">
                <option v-for="(group, index) in groups" :value="index">
                  {{
                  group.title.rendered
                  }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="user_pass">Password</label>
              <input
                type="password"
                class="form-control"
                name="user_pass"
                :value="user_pass"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 text-right">
            <button type="submit" class="btn btn-info px-5 py-2">Add User</button>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UserService from '@/services/UserService.js';
  export default {
    name: 'adduser',
    layout: 'admin',
    data() {
      return {
        user_login: '',
        user_pass: 'progressive1',
        first_name: '',
        last_name: ''
      }
    },
    computed: {
      ...mapState({
        groups: state => state.groups.all
      })
    },
    async fetch({ store, error }) {
      try {
        await store.dispatch('groups/fetchGroups')
      } catch (e) {

      }
    },
    methods: {
      createUsername(e) {
        let name = e.target.value.split(' ')
        if(name.length == 2) {
          let initial = name[0].charAt(0)
          this.user_login = initial.concat(name[1]).toLowerCase()
        }
      },
      addUser(event) {
        UserService.addUser(
          {
            username: event.target.elements.user_login.value,
            password: this.user_pass,
            nickname: event.target.elements.user_nicename.value,
            email: event.target.elements.user_email.value,
            name: event.target.elements.display_name.value,
            roles: ['advisor'],
            fields: {
              group: event.target.elements.group.value
            }
          },
          {
            headers: {
              Authorization: `${this.$store.$auth.getToken('local')}`
            }
          }
        )
        .then(response => {
          console.log(response)
        })
        .catch(e => {
          console.log('There was an error' + e.response)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
