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

  methods: {
    ...mapActions("ComponenteService", ["ActionAdicionarComponente"]),
    adicionar(componente) {
      if (this.id) {
        this.atualizar();
      } else {
        return this.ActionAdicionarComponente(componente).then(res =>
          console.log(res)
        );
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
        componente: this.componente
      };
      return this.ActionAtualizarComponente(payload).then(res =>
        console.log(res.data)
      );
    }
  },

  created() {
    if (this.id) {
      this.obter(this.id);
    }
  },

  data() {
    return {
      componente: new Componente(),
      id: this.$route.params.id
    };
  }
};
