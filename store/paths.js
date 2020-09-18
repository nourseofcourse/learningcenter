import PathService from '~/services/PathService'

export const mutations = {
  SET_PATHS(state, paths) {
    state.all = paths
  },
  SET_PATH(state, path) {
    state.path = path
  }
}

export const actions = {
  fetchPaths({ commit }) {
    return PathService.getPaths().then(response => {
      commit('SET_PATHS', response.data)
    })
  },
  fetchPath({ commit }, slug) {
    return PathService.getPath(slug).then(response => {
      // Pop the result because WordPress returns an array
      commit('SET_PATH', response.data.pop())
    })
  }
}
