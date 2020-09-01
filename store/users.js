import UserService from '@/services/UserService.js'

export const mutations = {
  SET_USERS(state, users) {
    state.all = users
  }
}

export const actions = {
  fetchUsers({ commit }) {
    return UserService.getUsers().then(response => {
      commit('SET_USERS', response.data)
    })
  }
}
