import Vue from "vue"

export const state = () => ({
  user: null,
  ghCode: null
})

export const getters = {
  getUser(state) {
    return state.user
  },
  getGhCode(state) {
    return state.ghCode
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user
    state.ghCode = user.paresedToken.access_token
    Vue.$cookies.set('SCDS-USER', user)
  }
}

export const actions = {

}
