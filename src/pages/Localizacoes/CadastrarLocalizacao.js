import { mapActions } from "vuex";
import Card from "src/components/Cards/Card.vue";
import { BFormInput } from "bootstrap-vue";
import Localizacao from "./model/Localizacao";

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
    ...mapActions("LocalizacaoService", ["ActionAdicionarLocalizacao"]),
    adicionar(localizacao) {
      if (this.id) {
        this.atualizar();
        alert("Localização atualizado com sucesso!");
        this.$router.push({ name: "Localizações" });
      } else {
        return this.ActionAdicionarLocalizacao(localizacao).then(res => {
          console.log(res);
          alert("Localização cadastrada com sucesso!");
          this.$router.push({ name: "Localizações" });
        });
      }
    },

    ...mapActions("LocalizacaoService", ["ActionObterLocalizacao"]),
    obter(localizacaoId) {
      return this.ActionObterLocalizacao(localizacaoId).then(
        res => (this.localizacao = res.data)
      );
    },

    ...mapActions("LocalizacaoService", ["ActionAtualizarLocalizacao"]),
    atualizar() {
      const payload = {
        localizacaoId: this.id,
        localizacao: this.localizacao
      };
      return this.ActionAtualizarLocalizacao(payload).then(res =>
        console.log(res.data)
      );
    }
  },

  data() {
    return {
      localizacao: new Localizacao(),
      id: this.$route.params.id
    };
  }
};
