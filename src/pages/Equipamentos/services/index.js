import EquipamentoService from './services'

export default {
  state: {},
  mutations: {},
  actions: {
    ActionListarEquipamento(context, payload){
      return EquipamentoService.listar(payload)
    },
    ActionAdicionarEquipamento(context, payload){
      return EquipamentoService.adicionar(payload)
    },
    ActionRemoverEquipamento(context, payload){
      return EquipamentoService.remover(payload)
    },
    ActionObterEquipamento(context, payload){
      return EquipamentoService.obter(payload)
    },
    ActionAtualizarEquipamento(context, payload){
      return EquipamentoService.atualizar(payload)
    },
  },
  namespaced: true,
}
