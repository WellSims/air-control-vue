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
            <form @submit.prevent="adicionar(localizacao)">
              <div class="row">
                <div class="col-md-6">
                  <label for="nome">Sala </label>
                  <input
                    placeholder="Digite a sala"
                    required
                    class="form-control"
                    name="sala"
                    id="sala"
                    autocomplete="off"
                    v-model="localizacao.sala"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label for="nome">Prédio </label>
                  <input
                    placeholder="Digite o prédio"
                    required
                    class="form-control"
                    name="predio"
                    id="predio"
                    autocomplete="off"
                    v-model="localizacao.predio"
                  />
                </div>
              </div>

              <router-link to="/localizacoes">
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
import CadastrarLocalizacao from "./CadastrarLocalizacao";

export default {
  ...CadastrarLocalizacao
};
</script>
<style></style>
