<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <h4 slot="header" class="card-title">Componentes</h4>
            <router-link to="/componentes/cadastrar">
              <button class="btn btn-primary btn-fill float-right">
                Adicionar
              </button>
            </router-link>
            <div>
              <b-table
                hover
                striped
                :items="componente.data"
                :fields="componente.columns"
                responsive:true
              >
                <template #cell(acoes)="row">
                  <router-link :to="{name: 'Editar', params:{id:row.item.id}}">
                    <b-button
                      size="sm"
                      :name="row"
                      class="btn btn-primary btn-fill"
                      style="margin-right:5px;"
                      >EDITAR</b-button
                    ></router-link
                  >
                  <b-button
                    size="sm"
                    :name="row"
                    class="btn btn-danger btn-fill"
                    @click="remover(row.item)"
                    >REMOVER</b-button
                  >
                </template>
              </b-table>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListarComponente from "./ListarComponente";
export default {
  ...ListarComponente
};
</script>

<style></style>
