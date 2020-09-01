import axiox from '@/plugins/axios'
import axios from '@/plugins/axios'

export default {
  getUserByUsername(username) {
    return axios.get('/learningcenter/v1/users/' + username)
  },
  getUserById(id) {
    return axios.get('/learningcenter/v1/users/' + id)
  },
  getUsers() {
    return axios.get('/learningcenter/v1/users')
  },
  addUser(data, headers) {
    return axios.post('/wp/v2/users', data, headers)
  },
  updateUser(data, headers) {
    return axios.post('/wp/v2/users', data, headers)
  }
}
