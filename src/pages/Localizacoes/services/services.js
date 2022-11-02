import axios from "axios";

export default {
  listar: (param) => {
   return axios.get("http://localhost:8080/localizacoes")
  },
  adicionar: (param) => {
    return axios.post("http://localhost:8080/localizacoes", param)
  },
  remover: (param) => {
    return axios.delete("http://localhost:8080/localizacoes/" + param)
  },
  obter: (param) => {
    return axios.get("http://localhost:8080/localizacoes/" + param)
  },
  atualizar:(param)=>{
    return axios.put("http://localhost:8080/localizacoes/" + param.localizacaoId, param.localizacao)
  }
};
