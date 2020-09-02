<template>
  <div>
    <ul>
      <li
        v-for="(course, index) in courses"
        :key="index"
        :course="course">
        <nuxt-link :to="'/admin/courses/edit/' + course.id">{{ course.title.rendered }}</nuxt-link>
        </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'admin-courses',
    layout: 'admin',
    head() {
      return {
        title: 'Courses'
      }
    },
    computed: {
      ...mapState({
        courses: state => state.courses.all
      })
    },
    async fetch({ store, error }) {
      try {
        await store.dispatch('courses/fetchCourses')
      } catch (e) {
        // TODO: add better error handling later
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
