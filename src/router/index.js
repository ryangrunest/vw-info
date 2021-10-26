import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import OwnersManualViewer from "../views/OwnersManualViewer.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    alias: '/',
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About,
  },
  {
    path: "/owners-manual-viewer/:id",
    name: 'OwnersManualViewer',
    component: OwnersManualViewer
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;