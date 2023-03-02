import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import PrivacyPolicy from "./pages/PrivacyPolicy.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  //   {
  //     path: "/terms",
  //     name: "CreateJobs",
  //     component: CreateJobs,
  //   },
  //   {
  //     path: "/404",
  //     name: "NotFound",
  //     component: NotFound,
  //   },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
