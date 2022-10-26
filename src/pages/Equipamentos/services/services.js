import axios from "axios";

export default {
  listar: (param) => {
   return axios.get("http://localhost:8080/equipamentos")
  },
  adicionar: (param) => {
    return axios.post("http://localhost:8080/equipamentos", param)
  },
  remover: (param) => {
    return axios.delete("http://localhost:8080/equipamentos/" + param)
  },
  obter: (param) => {
    return axios.get("http://localhost:8080/equipamentos/" + param)
  },
  atualizar:(param)=>{
    return axios.put("http://localhost:8080/equipamentos/" + param.equipamentoId, param.equipamento)
  }
};
