<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Striped Table with Hover</h4>
              <p class="card-category">Here is a subtitle for this table</p>
            </template>
            <l-table
              class="table-hover table-striped"
              :columns="table1.columns"
              :data="table1.data"
            >
            </l-table>
          </card>
        </div>

        <div class="col-12">
          <card class="card-plain">
            <template slot="header">
              <h4 class="card-title">Table on Plain Background</h4>
              <p class="card-category">Here is a subtitle for this table</p>
            </template>
            <div class="table-responsive">
              <l-table
                class="table-hover"
                :columns="table2.columns"
                :data="table2.data"
              >
              </l-table>
            </div>
          </card>
        </div>

        <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Small table</h4>
              <p class="card-category">Here is a subtitle for this table</p>
            </template>
            <l-table
              class="table-hover table-striped table-sm"
              :columns="table1.columns"
              :data="table1.data"
            >
            </l-table>
          </card>
          {{ table1.data }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LTable from "src/components/Table.vue";
import Card from "src/components/Cards/Card.vue";
import axios from "axios";
import { mapActions } from "vuex";
const tableColumns = ["Id", "Nome", "Status"];
const tableData = [];
import Componente from "./Componentes/model/Componente";
export default {
  components: {
    LTable,
    Card
  },

  mounted() {
    this.listar();
    // this.adicionar(this.componente);
    // this.remover(this.componenteId);
    // this.obter(this.componenteId);
    // this.atualizar(this.componenteId, this.componente);
  },

  methods: {
    ...mapActions("ComponenteService", ["ActionListarComponente"]),
    listar() {
      return this.ActionListarComponente().then(
        res => (this.table1.data = res.data)
      );
    },

    ...mapActions("ComponenteService", ["ActionAdicionarComponente"]),
    adicionar(componente) {
      return this.ActionAdicionarComponente(componente).then(res =>
        console.log(res)
      );
    },

    ...mapActions("ComponenteService", ["ActionRemoverComponente"]),
    remover(componenteId) {
      return this.ActionRemoverComponente(componenteId).then(res =>
        console.log(res)
      );
    },

    ...mapActions("ComponenteService", ["ActionObterComponente"]),
    obter(componenteId) {
      return this.ActionObterComponente(componenteId).then(res =>
        console.log(res)
      );
    },

    ...mapActions("ComponenteService", ["ActionAtualizarComponente"]),
    atualizar() {
      const payload = {
        componenteId: this.componenteId,
        componente: this.componente
      };
      return this.ActionAtualizarComponente(payload).then(res =>
        console.log(res.data)
      );
    }
  },

  data() {
    return {
      componente: new Componente("EUUUU", "LIGADO"),
      componenteId: 1,
      table1: {
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
        columns: [...tableColumns],
        data: []
      }
    };
  }
};
</script>
<style></style>
