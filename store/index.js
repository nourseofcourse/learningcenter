import { state } from "./menu"

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  loggedInUser(state) {
    return state.auth.user
  },
  viewingAsAdvisor(state) {
    if( state.auth.user ) {
      return state.auth.user.acf.viewingasadvisor
    }
  },
  isAdmin(state) {
    if( state.auth.user ) {
      const roles = state.auth.user.role
      const viewingAs = state.auth.user.acf.viewingasadvisor
      if( viewingAs == true && state.auth.user.acf.advisor ) {
        const viewingRoles = state.auth.user.acf.advisor.role
      }
      return ( roles.includes('administrator') || roles.includes('servicer') ) && ( viewingAs != true )
    }
    return false
  },
  switchedUser(state) {
    if( state.auth.user ) {
      return state.auth.user.acf.advisor
    }
  },
  getModuleLessons(state) {
    return [...state.courses.course.lessons].filter(lesson => {
      lesson.ID == 14
    })
  }
}

export const mutations = {
  TOGGLE_USER_SWITCH(state, user) {
    if(parseInt(state.auth.user.id) !== parseInt(user.ID)) {
      state.auth.user.acf.viewingasadvisor = true
      state.auth.user.acf.advisor = user.data
    } else {
      state.auth.user.acf.viewingasadvisor = false
      state.auth.user.acf.advisor = null
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
