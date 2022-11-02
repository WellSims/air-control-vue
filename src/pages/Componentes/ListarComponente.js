import { mapActions } from "vuex";
import Card from "src/components/Cards/Card.vue";
import { BTable } from "bootstrap-vue";
import Componente from "../Componentes/model/Componente";
import { BButton } from "bootstrap-vue";
const componenteColumns = [
  { key: "id", label: "ID" },
  { key: "nome", label: "Nome" },
  { key: "localizacao.sala", label: "Sala"},
  { key: "localizacao.predio", label: "Prédio"},
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
    },

    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },

  data() {
    return {
      currentPage: 1,
      componente: {
        columns: [...componenteColumns],
        data: [...componenteData]
      }
    };
  }
};
