import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/modoo'
    },
    {
      path: '/modoo',
      name: 'modoo',
      component: () => import(/* webpackChunkName: "about" */ './views/Modoo.vue'),
    },
    {
      path: '/hot',
      name: 'hot',
      component: () => import(/* webpackChunkName: "about" */ './views/Hot.vue'),
    },
    {
      path: '/talk',
      name: 'talk',
      component: () => import(/* webpackChunkName: "about" */ './views/Talk.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "about" */ './views/Profile.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
    },
    // {
    //   path: '/modoo',
    //   name: 'modoo',
    //   component: () => import(/* webpackChunkName: "about" */ './views/Modoo.vue'),
    // },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
