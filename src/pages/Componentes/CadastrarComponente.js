import { mapActions } from "vuex";
import Card from "src/components/Cards/Card.vue";
import Componente from "./model/Componente";
import { BFormInput } from "bootstrap-vue";
import ComponenteServices from "./services/services";
export default {
  components: {
    Card,
    BFormInput
  },

  created() {
    this.listarLocalizacoes();
    if (this.id) {
      this.obter(this.id);
    }
  },

  methods: {
    ...mapActions("ComponenteService", ["ActionAdicionarComponente"]),
    adicionar(componente) {
      if (this.id) {
        this.atualizar();
        alert("Componente atualizado com sucesso!");
        this.$router.push({ name: "Componentes" });
      } else {
        return this.ActionAdicionarComponente(componente).then(res => {
          console.log(res);
          alert("Componente cadastrado com sucesso!");
          this.$router.push({ name: "Componentes" });
        });
      }
    },

    ...mapActions("ComponenteService", ["ActionObterComponente"]),
    obter(componenteId) {
      return this.ActionObterComponente(componenteId).then(
        res => (this.componente = res.data)
      );
    },

    ...mapActions("ComponenteService", ["ActionAtualizarComponente"]),
    atualizar() {
      const payload = {
        componenteId: this.id,
        componente: {
          nome: this.componente.nome,
          status: this.componente.status,
          localizacao: {
            id: this.componente.localizacao.id
          }
        }
      };
      return this.ActionAtualizarComponente(payload).then(res =>
        console.log(res.data)
      );
    },
    ...mapActions("LocalizacaoService", ["ActionListarLocalizacao"]),
    listarLocalizacoes() {
      return this.ActionListarLocalizacao().then(
        res => (this.localizacoes = res.data)
      );
    },
  },

  data() {
    return {
      localizacoes:[],
      componente: new Componente(),
      id: this.$route.params.id
    };
  }
};
