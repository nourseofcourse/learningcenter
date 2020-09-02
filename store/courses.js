import CourseService from '~/services/CourseService'

export const mutations = {
  SET_COURSES(state, courses) {
    state.all = courses
  },
  SET_COURSE(state, course) {
    state.course = course
  }
}

export const actions = {
  fetchCourses({ commit }) {
    return CourseService.getCourses().then(response => {
      commit('SET_COURSES', response.data)
    })
  },
  fetchCourse({ commit }, id) {
    return PostService.getCourse(id).then(response => {
      // Pop the result because WordPress returns an array
      commit('SET_COURSE', response.data.pop())
    })
  },
  fetchCourseBySlug({ commit }, slug) {
    return CourseService.getCourseBySlug(slug).then(response => {
      // Pop the result because WordPress returns an array
      commit('SET_COURSE', response.data.pop())
    })
  },
  fetchCourseById({ commit }, id) {
    return CourseService.getCourseById(id).then(response => {
      commit('SET_COURSE', response.data)
    })
  }
}
