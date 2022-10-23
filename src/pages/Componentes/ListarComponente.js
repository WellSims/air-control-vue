import { mapActions } from "vuex";
import Card from "src/components/Cards/Card.vue";
import { BTable } from "bootstrap-vue";
import Componente from "../Componentes/model/Componente";
import { BButton } from "bootstrap-vue";
const componenteColumns = [
  { key: "id", label: "IDENTIFICADOR" },
  { key: "nome", label: "Nome" },
  { key: "status", label: "Status" },
  { key: "acoes", label: "Ações" }
];

const componenteData = [];

export default {
  components: {
    Card,
    Componente,
    BTable,
    BButton
  },

  mounted() {
    this.listar();
  },

  methods: {
    ...mapActions("ComponenteService", ["ActionListarComponente"]),
    listar() {
      return this.ActionListarComponente().then(
        res => (this.componente.data = res.data)
      );
    },

    ...mapActions("ComponenteService", ["ActionRemoverComponente"]),
    remover(componente) {
      return this.ActionRemoverComponente(componente.id).then(res => {
        let indice = this.componente.data.indexOf(componente);
        this.componente.data.splice(indice, 1);
      });
    }
  },

  data() {
    return {
      componente: {
        columns: [...componenteColumns],
        data: [...componenteData]
      }
    };
  }
};
