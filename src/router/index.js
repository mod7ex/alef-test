import { createRouter, createWebHistory } from "vue-router";

const routes = [
      {
            path: "/",
            name: "Forma",
            component: () => import("../views/Forma.vue"),
      },

      {
            path: "/preview",
            name: "Preview",
            component: () => import("../views/Preview.vue"),
      },
];

const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
});

export default router;
