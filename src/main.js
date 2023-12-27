// import './assets/main.css'
import { createRouter, createWebHistory } from "vue-router";
import { createGtm } from "@gtm-support/vue-gtm";
import { createApp } from "vue";
import App from "./App.vue";
// import Home from "./pages/Home.vue";
// import About from "./pages/About.vue";
// import Liff from "./pages/LIFF.vue";
//#####

const routes = [
  {
    path: "/",
    //redirect: "https://liff.line.me/1656824759-lQKpOazZ", // web site B
    name: "home",
    component: () => import("./pages/Home.vue"),
    //component: Home,
  },
  {
    path: "/about",
    name: "about",
    //component: About,
    component: () => import("./pages/About.vue"),
  },
  {
    path: "/liff",
    name: "liff",
    //component: Liff,
    component: () => import("./pages/Liff.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  //history: createWebHashHistory(),
  routes,
});

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     {
//       path: "/",
//       component: Home,
//     },
//     {
//       path: "/about",
//       component: About,
//     },
//   ],
// });

//createApp(App).use(router).mount("#app");
createApp(App)
  .use(router)
  .use(
    createGtm({
      id: "GTM-W4PF2FQ2", // GTM ID
    })
  )
  .mount("#app");
//
// createApp(App)
//   .use(
//     createGtm({
//       id: "GTM-W4PF2FQ2", // GTM ID
//       vueRouter: router,
//     })
//   )
//   .mount("#app");
