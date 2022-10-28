<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <h4 slot="header" class="card-title">Equipamentos</h4>
            <router-link to="/equipamentos/cadastrar">
              <button class="btn btn-primary btn-fill float-right">
                Cadastrar
              </button>
            </router-link>
            <div>
              <b-table
                :current-page="currentPage"
                :per-page="9"
                hover
                striped
                :items="equipamentos.data"
                :fields="equipamentos.columns"
                responsive:true
                @filtered="onFiltered"
              >
                <template #cell(acoes)="row">
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
                </template>
                <template #cell(horarios)="row">
                  <b-button
                    title="Agenda"
                    size="sm"
                    :name="row"
                    class="btn btn-info btn-fill"
                    ><b-icon icon="calendar2-plus"></b-icon
                  ></b-button>
                </template>
              </b-table>
              <b-pagination
                pills
                align="center"
                v-model="currentPage"
                :total-rows="this.equipamentos.data.length"
                :per-page="10"
                class="my-0"
              ></b-pagination>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ListarEquipamento from "./ListarEquipamento";
export default {
  ...ListarEquipamento
};
</script>
