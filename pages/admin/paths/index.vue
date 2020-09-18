<template>
  <div>
    <ul>
      <li
        v-for="(path, index) in paths"
        :key="index">
        {{ path.title.rendered }}
        </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "admin-paths",
    head() {
      return {
        title: 'Paths'
      }
    },
    computed: {
      ...mapState({
        paths: state => state.paths.all
      })
    },
    async fetch({ store, error }) {
      try {
        await store.dispatch('paths/fetchPaths')
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch courses at this time. Please try again later'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
