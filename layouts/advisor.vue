<template>
  <div>
    <ViewingAs />
    <nuxt-link :to="'/admin/courses'">Courses</nuxt-link> | <nuxt-link :to="'/admin/users'">Users</nuxt-link>
    <main class="main">
      <nuxt />
    </main>
  </div>
</template>

<script>
import ViewingAs from '@/components/ViewingAs.vue';
export default {
  components: {
    ViewingAs
  },
  middleware: ['advisor']
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
