import { createRouter, createWebHashHistory } from "vue-router";
import StandLayout from "../views/StandLayout/index.vue";
import Login from "../views/Login/index.vue";
import Cookies from 'js-cookie'

const routes = [
  {
    path: "/",
    redirect: '/demo',
    component: StandLayout,
    meta: {
      requireLoginValid: true,
      keepAlive: true,
      key:"home"
    },
    name: "home",
    children: [
    {
      path: "/demo",
      name: "demo",
      component: () =>
        import(
          /* webpackChunkName: "home" */ "../views/Demo/index.vue"
        ),
      meta: {
        keepAlive: true,
      }
    }],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

function canUserAccess() {
  if (!Cookies.get("token")) {
    return false;
  }
  return true;
}
router.beforeEach((to, from, next) => {
  if (to.meta.requireLoginValid && !canUserAccess()) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
