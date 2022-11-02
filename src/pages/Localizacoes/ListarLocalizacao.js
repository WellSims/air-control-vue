import { mapActions } from "vuex";
import Card from "src/components/Cards/Card.vue";
import { BTable } from "bootstrap-vue";
import { BButton } from "bootstrap-vue";

const localizacaoColumns = [
  { key: "id", label: "ID" },
  { key: "sala", label: "Sala" },
  { key: "predio", label: "Prédio" },
  { key: "acoes", label: "Ações" }];

const localizacaoData = [];

export default {
  components: {
    Card,
    BTable,
    BButton
  },

  mounted() {
    this.listar();
  },

  methods: {
    ...mapActions("LocalizacaoService", ["ActionListarLocalizacao"]),
    listar() {
      return this.ActionListarLocalizacao().then(
        res => (this.localizacao.data = res.data)
      );
    },

    ...mapActions("LocalizacaoService", ["ActionRemoverLocalizacao"]),
    remover(localizacao) {
      return this.ActionRemoverLocalizacao(localizacao.id).then(res => {
        let indice = this.localizacao.data.indexOf(localizacao);
        this.localizacao.data.splice(indice, 1);
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
      localizacao: {
        columns: [...localizacaoColumns],
        data: [...localizacaoData]
      }
    };
  }
};
