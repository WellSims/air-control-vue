import DashboardLayout from "../layout/DashboardLayout.vue";
// GeneralViews
import NotFound from "../pages/NotFoundPage.vue";

// Admin pages
import Overview from "src/pages/Overview.vue";
import UserProfile from "src/pages/UserProfile.vue";
import TableList from "src/pages/TableList.vue";
import Typography from "src/pages/Typography.vue";
import Icons from "src/pages/Icons.vue";
import Maps from "src/pages/Maps.vue";
import Notifications from "src/pages/Notifications.vue";
import Upgrade from "src/pages/Upgrade.vue";
import ListarComponente from "src/pages/Componentes/ListarComponente.vue";
import CadastrarComponente from "src/pages/Componentes/CadastrarComponente.vue";
import ListarEquipamento from "src/pages/Equipamentos/ListarEquipamento.vue"
import CadastrarEquipamento from "src/pages/Equipamentos/CadastrarEquipamento.vue"

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/componentes",
    children: [
      {
        path: "componentes",
        name: "Componentes",
        component: ListarComponente
      },
      {
        path: "componentes/cadastrar",
        name: "AdicionarComponente",
        component: CadastrarComponente
      },
      {
        path: "componentes/alterar/:id",
        name: "EditarComponente",
        component: CadastrarComponente
      },
      {
        path: "componentes/alterar",
        component: CadastrarComponente,
        redirect: "componentes/cadastrar"
      },
      {
        path: "equipamentos",
        component: ListarEquipamento,
        name: "Equipamentos"
      },
      {
        path: "equipamentos/cadastrar",
        name: "AdicionarEquipamento",
        component: CadastrarEquipamento,
      },
      {
        path: "equipamentos/alterar/:id",
        name: "EditarEquipamento",
        component: CadastrarEquipamento,
      },
      {
        path: "equipamentos/alterar",
        component: CadastrarComponente,
        redirect: "equipamentos/cadastrar"
      },
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;