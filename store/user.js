export const state = () => ({
  id: null,
  lastLogin: null,
  balances: null
})

export const getters = {
  getUserId(state) {
    return state.id
  },
  getLastLogin(state) {
    return state.lastLogin
  },
  getBalances(state) {
    return state.balances
  }
}

export const mutations = {
  setUserId(state, value) {
    state.id = value
  },
  setLastLogin(state, value) {
    state.lastLogin = value
  },
  setBalances(state, value) {
    state.balances = value
  }
}

export const actions = {
  setUserId({ commit }, id) {
    commit('setUserId', id)
  },

  setLastLogin({ commit }, date) {
    commit('setLastLogin', date)
  },

  setBalances({ commit }, data) {
    commit('setBalances', data)
  },
}
