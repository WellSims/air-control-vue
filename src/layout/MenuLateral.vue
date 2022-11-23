<template>
  <side-bar>
    <mobile-menu slot="content"></mobile-menu>
    <sidebar-link
      to="/componentes"
      :link="{
        children: [
          {
            icon: 'nc-icon nc-simple-add',
            name: 'Cadastrar',
            path: '/componentes/cadastrar'
          }
        ]
      }"
      :isOpen="true"
    >
      <i class="nc-icon nc-settings-90"></i>
      <p>Componentes</p>
    </sidebar-link>
    <sidebar-link
      to="/equipamentos"
      :link="{
        children: [
          {
            icon: 'nc-icon nc-simple-add',
            name: 'Cadastrar',
            path: '/equipamentos/cadastrar'
          },
          {
            icon: 'nc-icon nc-time-alarm',
            name: 'Agenda',
            path: '/componentes/cadastrar'
          }
        ]
      }"
    >
      <i class="nc-icon nc-preferences-circle-rotate"></i>
      <p>Equipamentos</p>
    </sidebar-link>
    <sidebar-link
      to="/localizacoes"
      :link="{
        children: [
          {
            icon: 'nc-icon nc-simple-add',
            name: 'Cadastrar',
            path: '/localizacoes/cadastrar'
          }
        ]
      }"
    >
      <i class="nc-icon  nc-pin-3"></i>
      <p>Localizações</p>
    </sidebar-link>
    <sidebar-link to="/componentes" :link="{
        children: [
          {
            icon: 'nc-icon nc-circle-09',
            name: 'Usuários',
            path: '/localizacoes/cadastrar'
          },
          {
            icon: 'nc-icon nc-key-25',
            name: 'Permissões',
            path: '/localizacoes/cadastrar'
          },
          {
            icon: 'nc-icon nc-vector',
            name: 'Grupos',
            path: '/localizacoes/cadastrar'
          }
        ]
      }">
      <i class="nc-icon nc-lock-circle-open"></i>
      <p>Acesso</p>
    </sidebar-link>
  </side-bar>
</template>
<style lang="scss"></style>
<script>
import MobileMenu from "./MobileMenu.vue";
export default {
  components: {
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
<style></style>
