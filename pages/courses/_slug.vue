<template>
  <article :data-id="course.id">
    {{ course.title.rendered }}
  </article>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'course',
    head() {
      return {
        title: 'title'
      }
    },
    computed: {
      ...mapState({
        course: state => state.courses.course
      })
    },
    async fetch({ store, error, params }) {
      try {
        await store.dispatch('courses/fetchCourseBySlug', params.slug )
        await store.dispatch('courses/fetchLessons', params.id)
      } catch(e) {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
