export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  loggedInUser(state) {
    return state.auth.user
  },
  viewingAsAdvisor(state) {
    console.log(state.auth)
    return state.auth.viewingAsAdvisor
  }
}

export const mutations = {
  TOGGLE_USER_SWITCH(state, user) {
    if(parseInt(state.auth.user.id) !== parseInt(user.ID)) {
      state.auth.viewingAsAdvisor = Boolean(true)
      state.auth.advisor = user.data
    } else {
      state.auth.viewingAsAdvisor = Boolean(false)
      state.auth.advisor = null
    }
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    //await dispatch('courses/fetchCourses')
    // await dispatch('posts/fetchPosts')
    // await dispatch('projects/fetchProjects')
  },
  switchUser({ commit, state }, id) {
    let index = state.users.all.findIndex(user => {
      return parseInt(user.ID) === parseInt(id)
    })
    commit('TOGGLE_USER_SWITCH', state.users.all[index])
  }
}
