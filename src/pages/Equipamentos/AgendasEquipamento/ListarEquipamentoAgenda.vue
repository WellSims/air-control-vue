<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <div slot="header" class="row">
              <div class="col-11">
                <h4 slot="header" class="card-title">
                  Dados do Equipamento
                </h4>
              </div>
            </div>
            <card
              class="strpied-tabled-with-hover align-items-center"
              body-classes="table-full-width table-responsive"
            >
              <div class="row">
                <div class="col-6">
                  <label for="nome">Id</label>
                  <input
                    disabled
                    type="number"
                    :placeholder="equipamento.id"
                    class="form-control"
                    name="id"
                    id="id"
                    autocomplete="off"
                  />
                </div>
                <div class="col-6">
                  <label for="nome">Nome</label>
                  <input
                    disabled
                    :placeholder="equipamento.nome"
                    class="form-control"
                    name="nome"
                    id="nome"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <label for="nome">Serial ID</label>
                  <input
                    disabled
                    type="number"
                    :placeholder="equipamento.componente.id"
                    class="form-control"
                    name="idComponente"
                    id="idComponente"
                    autocomplete="off"
                  />
                </div>
                <div class="col-6">
                  <label for="nome">Nome do Serial</label>
                  <input
                    disabled
                    :placeholder="equipamento.componente.nome"
                    class="form-control"
                    name="nomeComponente"
                    id="nomeComponente"
                    autocomplete="off"
                  />
                </div>
              </div> </card
          ></card>
          <card>
            <div slot="header" class="row">
              <div class="col-10">
                <h4 class="card-title">Agendas</h4>
              </div>
              <div>
                <b-button
                  v-b-modal.modal-prevent-closing
                  class="btn btn-primary btn-fill float-right"
                >
                  Cadastrar
                </b-button>
              </div>
            </div>
            <card
              class="strpied-tabled-with-hover align-items-center"
              body-classes="table-full-width table-responsive"
            >
              <b-modal
                okTitle="Salvar"
                cancelTitle="Fechar"
                @ok="handleOk"
                @show="resetModal"
                @hidden="resetModal"
                id="modal-prevent-closing"
                ref="modal"
                title="Cadastrar Agenda"
              >
                <form ref="form" @submit.stop.prevent="handleSubmit">
                  <label for="status">Dia da semana </label>
                  <b-form-select
                    :state="diaSemanaState"
                    label="Dia da Semana"
                    label-for="diaSemana-input"
                    invalid-feedback="Preencha o dia da semana"
                    v-model="agenda.diaSemana"
                  >
                    <b-form-select-option disabled value=""
                      >Selecione um dia da semana:</b-form-select-option
                    >
                    <b-form-select-option
                      :state="diaSemanaState"
                      id="diaSemana-input"
                      required
                      v-for="diaSemana in diasSemana"
                      :key="diaSemana.value"
                      :value="diaSemana.value"
                      >{{ diaSemana.text }}</b-form-select-option
                    >
                  </b-form-select>
                  <b-form-group
                    style="margin-top:7px"
                    :state="horarioState"
                    label="Horário"
                    label-for="horario-input"
                    invalid-feedback="Preencha o horário"
                  >
                    <b-form-input
                      :state="horarioState"
                      id="horario-input"
                      v-model="agenda.horario"
                      required
                      type="time"
                    ></b-form-input>
                  </b-form-group>
                  <label for="status">Comando </label>
                  <b-form-select
                    :state="comandoState"
                    label="Comando"
                    label-for="comando-input"
                    invalid-feedback="Preencha o comando"
                    v-model="agenda.comando"
                  >
                    <b-form-select-option disabled value=""
                      >Selecione um comando:</b-form-select-option
                    >
                    <b-form-select-option
                      :state="comandoState"
                      id="comando-input"
                      required
                      v-for="comando in comandos"
                      :key="comando.value"
                      :value="comando.value"
                      >{{ comando.text }}</b-form-select-option
                    >
                  </b-form-select>
                </form>
              </b-modal>
              <div>
                <b-table
                  :current-page="currentPage"
                  :per-page="perPage"
                  hover
                  striped
                  bordered
                  head-variant="dark"
                  :items="agendas.data"
                  :fields="agendas.columns"
                  responsive:true
                  @filtered="onFiltered"
                >
                  <!-- <template #cell(acoes)="row">
                  <router-link
                    :to="{
                      name: 'Equipamentos > Alterar',
                      params: { id: row.item.id }
                    }"
                  >
                    <b-button
                      title="Editar"
                      size="sm"
                      :name="row"
                      class="btn btn-primary btn-fill"
                      style="margin-right:5px;"
                      ><b-icon icon="pencil-square"></b-icon></b-button
                  ></router-link>
                  <b-button
                    title="Remover"
                    size="sm"
                    :name="row"
                    class="btn btn-danger btn-fill"
                    @click="remover(row.item)"
                    ><b-icon icon="trash-fill"></b-icon
                  ></b-button>
                </template> -->
                  <template #cell(acoes)="row">
                    <b-button
                      title="Editar"
                      size="sm"
                      :name="row"
                      class="btn btn-primary btn-fill"
                      style="margin-right:5px;"
                      ><b-icon icon="pencil-square"></b-icon
                    ></b-button>
                    <b-button
                      title="Remover"
                      size="sm"
                      :name="row"
                      class="btn btn-danger btn-fill"
                      ><b-icon icon="trash-fill"></b-icon
                    ></b-button>
                  </template>
                </b-table>
                <b-pagination
                  pills
                  align="center"
                  v-model="currentPage"
                  :total-rows="this.agendas.data.length"
                  :per-page="perPage"
                  class="my-0"
                ></b-pagination>
              </div>
            </card>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ListarEquipamentoAgenda from "./ListarEquipamentoAgenda";
export default {
  ...ListarEquipamentoAgenda
};
</script>
