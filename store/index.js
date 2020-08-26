export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  loggedInUser(state) {
    return state.auth.user
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    // await dispatch('menu/fetchMenu')
    // await dispatch('posts/fetchPosts')
    // await dispatch('projects/fetchProjects')
  }
}