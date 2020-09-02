<template>
  <article :data-id="course.id" class="wrapper">
    {{ course.title.rendered }}
  </article>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'course',
    layout: 'admin',
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
        await store.dispatch('courses/fetchCourseById', params.id )
        //await store.dispatch('courses/fetchLessons', params.id)
      } catch(e) {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
