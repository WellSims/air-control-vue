<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <div slot="header" class="row">
              <div class="col-10">
                <h4 slot="header" class="card-title">Localizações</h4>
              </div>
              <div class="col-2">
              <router-link to="/localizacoes/cadastrar">
                <button class="btn btn-primary btn-fill float-right">
                  Cadastrar
                </button>
              </router-link>
            </div>
            </div>
            <card
              class="strpied-tabled-with-hover align-items-center"
              body-classes="table-full-width table-responsive"
            >
              <div>
                <b-table
                  bordered

                  :current-page="currentPage"
                  :per-page="9"
                  hover
                  striped
                  head-variant="dark"
                  :items="localizacao.data"
                  :fields="localizacao.columns"
                  responsive:true
                  @filtered="onFiltered"
                >
                  <template #cell(acoes)="row">
                    <router-link
                      :to="{
                        name: 'Localizações > Alterar',
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
                </b-table>
                <b-pagination
                  pills
                  align="center"
                  v-model="currentPage"
                  :total-rows="this.localizacao.data.length"
                  :per-page="10"
                  class="my-0"
                ></b-pagination>
              </div> </card
          ></card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ListarLocalizacao from "./ListarLocalizacao";

export default {
  ...ListarLocalizacao
};
</script>
<style></style>
