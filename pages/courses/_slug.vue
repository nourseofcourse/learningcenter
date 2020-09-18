<template>
  <article>
    <h1>{{ course.course.post_title }}</h1>
    {{ course.lessons }}
    {{ course.modules }}

    <ul class="">
      <li v-for="(module, idx) in course.modules" :key="idx">
        {{ module.name }}
        {{ getModuleLessons }}

      </li>
    </ul>
  </article>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

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
      }),
      ...mapGetters(['getModuleLessons'])
    },
    async fetch({ store, error, params }) {
      try {
        await store.dispatch('courses/fetchCourseBySlug', params.slug )
      } catch(e) {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
