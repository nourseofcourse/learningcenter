import axios from '@/plugins/axios'

export default {
  getGroups() {
    return axios.get('/wp/v2/group?per_page=100&orderby=title&order=asc')
  },
  getGroup(id) {
    return axios.get('/wp/v2/group/' + id)
  },
  getGroupBySlug(slug) {
    return axios.get('/wp/v2/group?slug=' + slug)
  },
  updateGroupData(id, data, headers) {
    return axios.post('/acf/v3/posts/' + id, data, headers)
  },
  addGroup(data, headers) {
    return axios.post('/wp/v2/group', data, headers)
  }
}
