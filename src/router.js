import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import PrivacyPolicy from "./pages/PrivacyPolicy.vue";
import Post1 from "./pages/Post1.vue";
import Post2 from "./pages/Post2.vue";
import Post3 from "./pages/Post3.vue";
import NotFoundComponent from "./pages/404.vue";

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
  {
    path: "/promotions/post1",
    name: "Post1",
    component: Post1,
  },
  {
    path: "/promotions/post2",
    name: "Post2",
    component: Post2,
  },
  {
    path: "/promotions/post3",
    name: "Post3",
    component: Post3,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFoundComponent,
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
