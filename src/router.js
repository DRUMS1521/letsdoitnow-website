import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import HomeEn from "./components/Home-en.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Portfolio from "./components/Portfolio.vue";
import Blog from "./components/Blog.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/services", component: Services },
  { path: "/portfolio", component: Portfolio },
  { path: "/blog", component: Blog },
  { path: "/home-en", component: HomeEn },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;