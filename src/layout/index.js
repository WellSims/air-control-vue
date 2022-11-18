export default {
  state: {
    isLogin: false,
    authUsuario: {}
  },
  mutations: {
    setIsLogin(state, payload) {
      state.isLogin = payload
    },
    setAuthUsuario(state, payload){
      window.localStorage.setItem('authUsuario', JSON.stringify(payload))
      state.authUsuario = payload
    },

  },
  actions: {
    ActionIsLogin: ({ commit }, payload) => commit('setIsLogin', payload),
    ActionAuthUsuario: ({ commit }, payload) => commit('setAuthUsuario', payload),
    ActionClearUsuario (s , p) {
      window.localStorage.removeItem('authUsuario')
    },
  },
  namespaced: true
}
