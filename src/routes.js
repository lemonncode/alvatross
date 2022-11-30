import Home from "./views/Home.vue";

import Floors from "./views/Floors.vue";
import Api from "./views/Api.vue";

import NotFound from "./views/NotFound.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/floors", name: "floors", component: Floors },
  { path: "/api", name: "api", component: Api },

  { path: "/:path(.*)", component: NotFound },
];
