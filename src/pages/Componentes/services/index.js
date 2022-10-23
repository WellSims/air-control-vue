import ComponenteServices from './services'

export default {
  state: {},
  mutations: {},
  actions: {
    ActionListarComponente(context, payload){
      return ComponenteServices.listar(payload)
    },
    ActionAdicionarComponente(context, payload){
      return ComponenteServices.adicionar(payload)
    },
    ActionRemoverComponente(context, payload){
      return ComponenteServices.remover(payload)
    },
    ActionObterComponente(context, payload){
      return ComponenteServices.obter(payload)
    },
    ActionAtualizarComponente(context, payload){
      return ComponenteServices.atualizar(payload)
    },
  },
  namespaced: true
}
