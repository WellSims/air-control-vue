import { mapActions } from "vuex";
import Card from "src/components/Cards/Card.vue";
import { BFormInput } from "bootstrap-vue";
import Equipamento from "./model/Equipamento";

export default {
  components: {
    Card,
    BFormInput
  },

  created() {
    this.listarComponentes();
    if (this.id) {
      this.obter(this.id);
    }
  },

  methods: {
    ...mapActions("EquipamentoService", ["ActionAdicionarEquipamento"]),
    adicionar(equipamento) {
      if (this.id) {
        this.atualizar();
        alert("Equipamento atualizado com sucesso!");
        this.$router.push({ name: "Equipamentos" });
      } else {
        return this.ActionAdicionarEquipamento(equipamento).then(res => {
          console.log(res);
          alert("Equipamento adicionaro com sucesso!");
          this.$router.push({ name: "Equipamentos" });
        });
      }
    },

    ...mapActions("EquipamentoService", ["ActionObterEquipamento"]),
    obter(equipamentoId) {
      return this.ActionObterEquipamento(equipamentoId).then(
        res => (this.equipamento = res.data)
      );
    },

    ...mapActions("EquipamentoService", ["ActionAtualizarEquipamento"]),
    atualizar() {
      const payload = {
        equipamentoId: this.id,
        equipamento: {
          nome: this.equipamento.nome,
          componente: {
            id: this.equipamento.componente.id
          }
        }
      };
      return this.ActionAtualizarEquipamento(payload).then(res =>
        console.log(res.data)
      );
    },

    ...mapActions("ComponenteService", ["ActionListarComponente"]),
    listarComponentes() {
      return this.ActionListarComponente().then(
        res => (this.componentes = res.data)
      );
    }
  },

  data() {
    return {
      componentes: [],
      equipamento: new Equipamento(),
      id: this.$route.params.id
    };
  }
};
