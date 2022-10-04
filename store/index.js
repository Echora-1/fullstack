export const state = () => ({
  theme: 'light',
  authenticated: false,
})

export const getters = {
  getTheme(state) {
    return state.theme
  },
  isDarkTheme(state) {
    return state.theme === 'dark'
  },
  isAuthenticated: (state) => state.authenticated,
}

export const mutations = {
  toggleTheme(state) {
    if(state.theme === 'light') {
      this.$cookies.set('theme', 'dark', {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
      state.theme = 'dark'
    } else {
      this.$cookies.set('theme', 'light', {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
      state.theme = 'light'
    }
  },

  setTheme(state, payload) {
    if(payload === 'dark' ) {
      state.theme = payload
    }
    if(payload === 'light') {
      state.theme = payload
    }
  },

  setAuthenticated(state, value) {
    state.authenticated = value
  },
}

export const actions = {
  toggleTheme(context) {
    context.commit('toggleTheme')
  },

  setTheme(context, payload) {
    context.commit('setTheme', payload)
  },

  setAuthenticated({ commit }, value) {
    commit('setAuthenticated', value)
  },
}
