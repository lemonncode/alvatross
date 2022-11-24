import Home from "./views/Home.vue";
import Test from "./views/Test.vue";


export const routes = [
  { path: "/", name: "home", component: Home },


  { path: "/test", name: "test", component: Test },
  { path: "/:path(.*)", component: NotFound },
];
