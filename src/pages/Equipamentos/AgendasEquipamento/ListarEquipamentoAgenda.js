import { mapActions } from "vuex";
import Card from "src/components/Cards/Card.vue";
import { BTable } from "bootstrap-vue";
import { BButton } from "bootstrap-vue";
import Equipamento from "../model/Equipamento";
import Agenda from "./model/Agenda";

const agendaColumns = [
  { key: "id", label: "ID" },
  { key: "diaSemana", label: "Dia da Semana" },
  { key: "horario", label: "Horário" },
  { key: "comando", label: "Comando" }
];

const agendaData = [];

export default {
  mounted() {
    if (this.equipamentoId) {
      this.obterEquipamento(this.equipamentoId);
    }
    this.listar(this.equipamentoId);
  },

  methods: {
    ...mapActions("AgendaService", ["ActionListarAgenda"]),
    listar(equipamentoId) {
      return this.ActionListarAgenda(equipamentoId).then(
        res => (this.agendas.data = res.data)
      );
    },

    ...mapActions("AgendaService", ["ActionAdicionarAgenda"]),
    salvar(agenda, equipamentoId) {
      const payload = {
        equipamentoId: equipamentoId,
        agenda: agenda
      };
      return this.ActionAdicionarAgenda(payload).then(res =>
        this.agendas.data.push(res.data)
      );
    },

    ...mapActions("EquipamentoService", ["ActionObterEquipamento"]),
    obterEquipamento(equipamentoId) {
      return this.ActionObterEquipamento(equipamentoId).then(
        res => (this.equipamento = res.data)
      );
    },

    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },

    resetModal() {
      this.agenda.diaSemana = "";
      this.agenda.horario = "";
      this.agenda.comando = "";
      this.diaSemanaState = null;
      this.horarioState = null;
      this.comandoState = null;
    },

    handleOk(bvModalEvent) {
      if (this.agenda.diaSemana != "") {
        this.diaSemanaState = null;
      }
      if (this.agenda.horario != "") {
        this.horarioState = null;
      }
      if (this.agenda.comando != "") {
        this.comandoState = null;
      }

      bvModalEvent.preventDefault();
      this.handleSubmit();
    },

    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();

      if (this.agenda.diaSemana == "") {
        this.diaSemanaState = valid;
      }
      if (this.agenda.horario == "") {
        this.horarioState = valid;
      }
      if (this.agenda.comando == "") {
        this.comandoState = valid;
      }

      return valid;
    },

    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.salvar(this.agenda, this.equipamentoId);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    }
  },

  data() {
    return {
      diaSemanaState: null,
      horarioState: null,
      comandoState: null,
      agenda: new Agenda(),
      equipamento: new Equipamento(),
      equipamentoId: this.$route.params.id,
      currentPage: 1,
      agendas: {
        columns: [...agendaColumns],
        data: [...agendaData]
      },
      comandos: [
        { value: "LIGAR", text: "LIGAR" },
        { value: "DESLIGAR", text: "DESLIGAR" }
      ],
      diasSemana: [
        { value: "SEGUNDA", text: "SEGUNDA-FEIRA" },
        { value: "TERÇA", text: "TERÇA-FEIRA" },
        { value: "QUARTA", text: "QUARTA-FEIRA" },
        { value: "QUINTA", text: "QUINTA-FEIRA" },
        { value: "SEXTA", text: "SEXTA-FEIRA" },
        { value: "SÁBADO", text: "SÁBADO" },
        { value: "DOMINGO", text: "DOMINGO" },
      ],
    };
  }
};
