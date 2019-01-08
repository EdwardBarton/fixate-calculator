import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Programs from '@/views/Programs.vue';
import About from '@/views/About.vue';
import Prep from '@/views/Prep.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/programs',
      name: 'programs',
      component: Programs
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/prep',
      name: 'prep',
      component: Prep
    }
  ]
});
