import Vue from "vue"
const axios = Vue.$axios

export const state = () => ({
  orgs: null,
  repos: null,
  selectedRepo: null
})

export const getters = {
  getRepos(state) {
    return state.repos
  },
  getOrgs(state) {
    return state.orgs
  },
  getSelectedRepo(state){
    return state.selectedRepo
  }
}

export const mutations = {
  setOrgs(state, orgs) {
    state.orgs = orgs
  },
  setRepos(state, repos) {
    state.repos = repos
  },
  setSelectedRepo(state, repo){
    state.selectedRepo = repo
  }
}

export const actions = {
  async getOrgs({ commit, state }, user) {
    const { data } = await this.$axios.get('http://localhost:3001/orgs', { params: { gh_token: user.paresedToken.access_token } })
    commit('setOrgs', data.orgs)
    commit('setRepos', data.repos)
  },
  async getRepo({ rootState, commit }, repo) {
    const user = rootState.oauth.user
    const { data } = await this.$axios.post('http://localhost:3001/orgs/repo',
      {
        data: {
          repo: repo,
          gh_token: user.paresedToken.access_token
        }
      },
      {
        params: {
          gh_token: user.paresedToken.access_token
        },

      })
    commit('setSelectedRepo', data)
  }
}
