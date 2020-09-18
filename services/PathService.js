import axios from '@/plugins/axios'

export default {
  getPaths() {
    return axios.get('/wp/v2/path')
  },
  getPath(id) {
    return axios.get('/wp/v2/path/' + id)
  },
  getPathBySlug(slug) {
    return axios.get('/wp/v2/path?slug=' + slug)
  },
  getPathById(id) {
    return axios.get('/wp/v2/path/' + id)
  }
}
