<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Courses</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="4"
        v-for="(course, index) in courses"
        :key="index"
        :course="course">
          <b-card
            class="mb-2"
            :title="course.title.rendered">
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
            <b-button :to="'/courses/' + course.slug" variant="info">View Course</b-button>
          </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'courses',
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
