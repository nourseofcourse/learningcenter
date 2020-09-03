<template>
  <div>
    <Header />
    <main class="main">
      <ViewingNotification />
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import ViewingNotification from '@/components/Admin/ViewingNotification.vue';
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
  components: {
    ViewingNotification,
    Header,
    Footer
  }
}
</script>

<style lang="scss">
.wrapper {
  max-width: 1200px;
  margin: {
    left: auto;
    right: auto;
  }
}
</style>
