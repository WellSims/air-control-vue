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
        componente: this.componente
      };
      return this.ActionAtualizarComponente(payload).then(res =>
        console.log(res.data)
      );
    }
  },

  data() {
    return {
      componente: new Componente(),
      id: this.$route.params.id
    };
  }
};
