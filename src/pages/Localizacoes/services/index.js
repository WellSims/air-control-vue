import LocalizacaoServices from './services'

export default {
  state: {},
  mutations: {},
  actions: {
    ActionListarLocalizacao(context, payload){
      return LocalizacaoServices.listar(payload)
    },
    ActionAdicionarLocalizacao(context, payload){
      return LocalizacaoServices.adicionar(payload)
    },
    ActionRemoverLocalizacao(context, payload){
      return LocalizacaoServices.remover(payload)
    },
    ActionObterLocalizacao(context, payload){
      return LocalizacaoServices.obter(payload)
    },
    ActionAtualizarLocalizacao(context, payload){
      return LocalizacaoServices.atualizar(payload)
    },
  },
  namespaced: true
}
