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

import ListarEquipamento from "src/pages/Equipamentos/ListarEquipamento.vue";
import CadastrarEquipamento from "src/pages/Equipamentos/CadastrarEquipamento.vue";

import ListarLocalizacao from "src/pages/Localizacoes/ListarLocalizacao.vue";
import CadastrarLocalizacao from "src/pages/Localizacoes/CadastrarLocalizacao.vue";

import ListarEquipamentoAgenda from "src/pages/Equipamentos/AgendasEquipamento/ListarEquipamentoAgenda.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/componentes",
    children: [
      //ROTAS DE COMPONENTES
      {
        path: "componentes",
        name: "Componentes",
        component: ListarComponente
      },
      {
        path: "componentes/cadastrar",
        name: "Componentes > Cadastrar",
        component: CadastrarComponente
      },
      {
        path: "componentes/alterar/:id",
        name: "Componentes > Alterar",
        component: CadastrarComponente
      },
      {
        path: "componentes/alterar",
        component: CadastrarComponente,
        redirect: "componentes/cadastrar"
      },

      //ROTAS DE EQUIPAMENTOS
      {
        path: "equipamentos",
        component: ListarEquipamento,
        name: "Equipamentos"
      },
      {
        path: "equipamentos/cadastrar",
        name: "Equipamentos > Cadastrar",
        component: CadastrarEquipamento
      },
      {
        path: "equipamentos/alterar/:id",
        name: "Equipamentos > Alterar",
        component: CadastrarEquipamento
      },
      {
        path: "equipamentos/alterar",
        component: CadastrarComponente,
        redirect: "equipamentos/cadastrar"
      },

      //ROTA DE AGENDAS É UM SUB-RECURSO DE EQUIPAMENTOS
      {
        path: "equipamentos/:id/agendas",
        name: "Equipamentos > Equipamento > Agendas",
        component: ListarEquipamentoAgenda
      },

      //ROTAS DE LOCALIZAÇÕES
      {
        path: "localizacoes",
        name: "Localizações",
        component: ListarLocalizacao
      },
      {
        path: "localizacoes/cadastrar",
        name: "Localizações > Cadastrar",
        component: CadastrarLocalizacao
      },
      {
        path: "localizacoes/alterar/:equipamentoId",
        name: "Localizações > Alterar",
        component: CadastrarLocalizacao
      },
      {
        path: "localizacoes/alterar",
        component: CadastrarLocalizacao,
        redirect: "localizacoes/cadastrar"
      }
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
