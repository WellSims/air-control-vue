<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <h4 slot="header" v-if="this.$route.params.id" class="card-title">
              Alterar
            </h4>
            <h4 slot="header" v-else class="card-title">Cadastrar</h4>
            <form @submit.prevent="adicionar(componente)">
              <div class="row">
                <div class="col-md-6">
                  <label for="nome">Nome </label>
                  <input
                    placeholder="Digite um nome para o componente"
                    required
                    class="form-control"
                    name="nome"
                    id="nome"
                    autocomplete="off"
                    v-model="componente.nome"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <label for="status">Status </label>
                  <b-form-select required v-model="componente.status">
                    <b-form-select-option disabled value=""
                      >Selecione um status:</b-form-select-option
                    >
                    <b-form-select-option value="LIGADO"
                      >LIGADO</b-form-select-option
                    >
                    <b-form-select-option value="DESLIGADO"
                      >DESLIGADO</b-form-select-option
                    >
                  </b-form-select>
                </div>
              </div>

              <router-link to="/componentes">
                <button
                  class="btn btn-secondary btn-fill float-left"
                  style="margin-top:10px"
                >
                  Voltar
                </button>
              </router-link>
              <button
                type="submit"
                class="btn btn-primary btn-fill"
                style="margin-left:10px; margin-top:10px"
              >
                Salvar
              </button>
            </form>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CadastrarComponente from "./CadastrarComponente";

export default {
  ...CadastrarComponente
};
</script>

<style></style>
