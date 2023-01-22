import { mapActions } from "vuex";
import Card from "src/components/Cards/Card.vue";
import { BTable } from "bootstrap-vue";
import Componente from "../Componentes/model/Componente";
import { BButton } from "bootstrap-vue";

const equipamentoColumns = [
  { key: "id", label: "ID" },
  { key: "nome", label: "Nome" },
  { key: "componente.id", label: "Serial" },
  { key: "componente.localizacao.sala", label: "Sala" },
  { key: "componente.localizacao.predio", label: "Prédio" },
  { key: "horarios", label: "Agenda" },
  { key: "acoes", label: "Ações" },
];

const equipamentoData = [];

export default {
  mounted() {
    this.listar();
  },

  methods: {
    ...mapActions("EquipamentoService", ["ActionListarEquipamento"]),
    listar() {
      return this.ActionListarEquipamento().then(
        res => (this.equipamentos.data = res.data)
      );
    },
    ...mapActions("EquipamentoService", ["ActionRemoverEquipamento"]),
    remover(equipamento) {
      return this.ActionRemoverEquipamento(equipamento.id).then(res => {
        let indice = this.equipamentos.data.indexOf(equipamento);
        this.equipamentos.data.splice(indice, 1);
      });
    },

    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  },

  data() {
    return {
      currentPage: 1,
      equipamentos: {
        columns: [...equipamentoColumns],
        data: [...equipamentoData]
      }
    };
  }
};
