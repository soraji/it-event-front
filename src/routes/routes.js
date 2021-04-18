import Vue from 'vue';
import VueRouter from 'vue-router';
import main from '../components/main.vue';
import detail from '../components/detail.vue';
import online from '../components/online.vue';
import free from '../components/free.vue';
import magam from '../components/magam.vue';
import mogakco from '../components/mogakco.vue';
import enroll from '../views/form/form.vue';
import login from '../views/login/login.vue';
import join from '../views/login/join.vue';
import joinStep2 from '../views/login/joinStep2.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode : 'history',
  routes : [
    {
      path:'/',
      redirect : '/main',
    },
    {
      path:'/main',
      component:main,
    },
    {
      path:'/online',
      component:online,
    },
    {
      path:'/magam',
      component:magam,
    },
    {
      path:'/detail',
      component:detail,
    },
    {
      path:'/enroll',
      component:enroll,
    },
    {
      path:'/login',
      component:login,
    },
    {
      path:'/join',
      component:join,
    },
    {
      path:'/joinStep2',
      component:joinStep2,
    }
  ]
});