import axios from '@/plugins/axios'

export default {
  getCourses() {
    return axios.get('/wp/v2/course')
  },
  getCourse(id) {
    return axios.get('/wp/v2/course/' + id)
  },
  getCourseBySlug(slug) {
    return axios.get('/learningcenter/v1/course/' + slug)
  },
  getCourseById(id) {
    return axios.get('/wp/v2/course/' + id)
  }
}
