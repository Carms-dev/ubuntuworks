import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Start from '../views/Start.vue';
import Module from '../views/Module.vue';
import ReportShow from '../views/ReportShow.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/reports/new',
    name: 'start',
    component: Start
  },
  {
    path: '/reports/:report_id/modules/:module_key',
    name: 'module',
    component: Module
  },
  {
    path: '/reports/:report_id',
    name: 'show',
    component: ReportShow
  },
  // {
  //   path: '/reports/:report_id/edit',
  //   name: 'edit',
  //   component: () => import('../components/ReportEdit')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
