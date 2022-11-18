import { mapActions } from "vuex";
export default {
  mounted() {},

  data() {
    return {
      form: {
        login: "",
        pw: ""
      }
    };
  },

  created() {
    this.ActionIsLogin(true);
    this.ActionClearUsuario(true);
  },

  methods: {
    ...mapActions("DashboardLayout", [
      "ActionIsLogin",
      "ActionAuthUsuario",
      "ActionClearUsuario"
    ]),
    async submit() {
      await this.ActionIsLogin(false);
      await this.ActionAuthUsuario(this.form);
      this.$router.push({ path: "componentes" });
    }
  }
};
