<template>
  <div class="wrapper">
    <menu-lateral v-if="!$store.state.DashboardLayout.isLogin"></menu-lateral>
    <div class="main-panel" :style="$store.state.DashboardLayout.isLogin? 'width:100%' : ''">
      <top-navbar v-if="!$store.state.DashboardLayout.isLogin"></top-navbar>

      <dashboard-content @click="toggleSidebar"> </dashboard-content>

      <content-footer
        v-if="!$store.state.DashboardLayout.isLogin"
      ></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import MenuLateral from "./MenuLateral";
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MenuLateral
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
