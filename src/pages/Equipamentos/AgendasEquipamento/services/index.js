import AgendaService from "./services";

export default {
  state: {},
  mutations: {},
  actions: {
    ActionListarAgenda(context, payload) {
      return AgendaService.listar(payload);
    },
    ActionAdicionarAgenda(context, payload) {
      return AgendaService.adicionar(payload);
    }
  },
  namespaced: true
};
