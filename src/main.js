import Vue from "vue";
import App from "./App.vue";
import "@/css/app.css";

Vue.config.productionTip = false;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Home = () => import('./components/Home.vue')
const Gallery = () => import('./components/Gallery.vue')
const About = () => import('./components/About.vue')

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/',
      name: 'home',
      component: Home,
      props: true,
    },
    { path: '/gallery',
      name: 'gallery',
      component: Gallery,
      props: true,
    },
    { path: '/about',
      name: 'about',
      component: About,
      props: true,
    }
  ]
})
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
