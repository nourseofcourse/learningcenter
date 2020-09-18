<template>
  <b-container>
    <b-row>
      <b-col :cols="4" :offset="4">
        <form method="post" @submit.prevent="login">
          <div class="form-group">
            <Notification :message="error" v-if="error" />
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="username" placeholder="Enter username" name="username" v-model="username">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="password" placeholder="Enter password" name="password" v-model="password">
          </div>
          <div class="form-group">
            <button class="btn btn-info" type="submit">Log In</button>
          </div>
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Notification from '@/components/Notification.vue';
  export default {
    name: 'Login',
    components: {
      Notification
    },
    head() {
      return {
        title: 'Sign in',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Sign in to the Learning Center.'
          }
        ]
      }
    },
    data() {
      return {
        username: '',
        password: '',
        error: ''
      }
    },
    methods: {
      async login() {
        try {
          await this.$auth.loginWith('local', {
            data: {
              username: this.username,
              password: this.password
            }
          })
          this.$router.push('/')
        } catch (e) {
          this.error = e.response.data.message
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
