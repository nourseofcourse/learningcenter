import GroupsService from '@/services/GroupsService.js'

export const mutations = {
  SET_GROUPS(state, groups) {
    state.all = groups
  },
  SET_GROUP(state, group) {
    state.group = group
  }
}

export const actions = {
  fetchGroups({ commit }) {
    return GroupsService.getGroups().then(response => {
      commit('SET_GROUPS', response.data)
    })
  },
  fetchGroup({ commit }, id) {
    return GroupsService.getGroup(id).then(response => {
      commit('SET_GROUP', response.data)
    })
  },
  fetchTeamBySlug({ commit }, slug) {
    return GroupsService.getGroupBySlug(slug).then(response => {
      const group = response.data.pop()
      commit('SET_GROUP', group)
    })
  }
}
