<template>
  <side-bar>
    <mobile-menu slot="content"></mobile-menu>
    <sidebar-link to="/componentes">
      <i class="nc-icon nc-settings-90"></i>
      <p>Componentes</p>
    </sidebar-link>
    <sidebar-link to="/equipamentos">
      <i class="nc-icon nc-preferences-circle-rotate"></i>
      <p>Equipamentos</p>
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
