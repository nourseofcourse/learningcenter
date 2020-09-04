<template>
  <header ref="headroom" role="navigation">
    <b-navbar type="dark" variant="dark"  class="navbar-horizontal">
      <b-container>
        <Logo />
        <UserNav />
      </b-container>
    </b-navbar>
    <b-navbar type="dark" variant="info" class="subnav">
      <b-container>
        <Menu />
        <NavToggle />
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
  import Logo from '@/components/Header/Logo.vue';
  import NavToggle from '@/components/Header/NavToggle.vue';
  import Menu from '@/components/Header/Menu.vue';
  import Headroom from 'headroom.js'
  import UserNav from '@/components/Header/UserNav.vue'

  export default {
    name: 'Header',
    components: {
      Logo,
      NavToggle,
      Menu,
      UserNav
    },
    mounted() {
      /**
       * Vue.nextTick
       *
       * Defer the callback to be executed after the next DOM update cycle. Use it immediately after you’ve changed some data to wait for the DOM update.
       * @see https://vuejs.org/v2/api/#Vue-nextTick
       */
      this.$nextTick(() => {
        this.initHeadroom()
      })
    },
    methods: {
      initHeadroom() {
        let _this = this
        let el = this.$refs['headroom']

        let headroom = new Headroom(el, {
          tolerance: 5,
          offset: 205
        })

        headroom.init()
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
