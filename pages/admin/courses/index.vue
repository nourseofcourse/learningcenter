<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Courses</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table striped hover :items="courses" :fields="fields">
          <template v-slot:cell(id)="data">
            <nuxt-link :to="'/admin/courses/edit/' + data.value">Edit</nuxt-link>
          </template>
        </b-table>
        <nuxt-link :to="'/admin/courses/create'">Create Course</nuxt-link>
      </b-col>
    </b-row>
  </b-container>

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
    data() {
      return {
        fields: [
          { key: 'title.rendered', label: 'Course Title' },
          { key: 'id', label: 'Actions'}
        ]
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
