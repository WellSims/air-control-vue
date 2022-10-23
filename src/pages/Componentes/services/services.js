import axios from "axios";

export default {
  listar: (param) => {
   return axios.get("http://localhost:8080/componentes")
  },
  adicionar: (param) => {
    return axios.post("http://localhost:8080/componentes", param)
  },
  remover: (param) => {
    return axios.delete("http://localhost:8080/componentes/" + param)
  },
  obter: (param) => {
    return axios.get("http://localhost:8080/componentes/" + param)
  },
  atualizar:(param)=>{
    return axios.put("http://localhost:8080/componentes/" + param.componenteId, param.componente)
  }
};
