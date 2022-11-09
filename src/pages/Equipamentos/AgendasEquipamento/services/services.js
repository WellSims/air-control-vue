import axios from "axios";

export default {
  listar: param => {
    return axios.get("http://localhost:8080/equipamentos/" + param + "/agendas");
  },
  adicionar: (param) => {
    return axios.post("http://localhost:8080/equipamentos/" + param.equipamentoId + "/agendas", param.agenda)
  },
};
