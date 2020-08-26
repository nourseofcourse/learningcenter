<template>
  <div>
    <form method="post" @submit.prevent="login">
      <Notification :message="error" v-if="error" />
      <input type="text" class="form__input" id="username" placeholder="Enter username" name="username" v-model="username">
      <input type="text" class="form__input" id="password" placeholder="Enter password" name="password" v-model="password">
      <button class="form__button" type="submit">Log In</button>
    </form>
  </div>
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
