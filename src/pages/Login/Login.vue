<template>
  <form @submit.prevent="submit()">
    <div class="login-page">
      <div class="card">
        <div class="card-body">
          <div class="img-group">
            <img src="img/control.png" id="imgLogin" />
          </div>
          <div class="camposForm">
            <div class="from-group">
              <label for="nome" style="float:left">Login </label>
              <input
                type="text"
                name="login"
                id="login"
                required
                class="form-control"
                v-model="form.login"
              />
            </div>
            <div class="form-group">
              <label for="nome" style="float:left">Senha </label>
              <input
                type="password"
                name="senha"
                id="senha"
                required
                class="form-control"
                v-model="form.pw"
              />
            </div>
            <div style="float:left; margin-top:-10px">
              <input
                type="checkbox"
                id="subscribeNews"
                name="subscribe"
                value="newsletter"
              />
              <label for="subscribeNews" style="margin-left:5px">
                Lembre-me
              </label>
            </div>
            <button class="btn btn-primary btn-fill w-100">Entrar</button>
            <div style="margin-top:15px;">
              <a href="#">Esqueci minha senha</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import Login from "./Login";

export default {
  ...Login
};
</script>
<style lang="scss" scoped>
.login-page {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .img-group {
    margin: auto;
    margin-bottom: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
      width: 60%;
    }
  }
  .card {
    width: 35%;
    min-width: 460px;
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
  .from-group {
    margin-bottom: 15px;
  }

  .camposForm {
    text-align: center;
    margin: 0 auto;
    width: 60%;
  }
  .card-body {
    margin: auto;
    display: block;
    background-color: white;
    width: 60%;
    border-radius: 10px;
  }
}
</style>
