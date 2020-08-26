import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import ErrorPagina from '../components/ErrorPagina.vue';
import Cocina from '../components/Cocina.vue'
import Notificacion from '../components/Notificacion.vue'
import Salon from '../components/Salón.vue'
import Navegador from '../components/Navegador.vue'
import Desayuno from '../components/Menus/Desayuno.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/salon',
    name: 'Salon',
    component: Salon,
  },
  {
    path: '/cocina',
    name: 'Cocina',
    component: Cocina,
  },
  {
    path: '/notificacion',
    name: 'Notificacion',
    component: Notificacion,
  },
  {
    path: '/navegador',
    name: 'Navegador',
    component: Navegador,
  },
  {
    path: '/desayuno',
    name: 'Desayuno',
    component: Desayuno,
  },
  {
    path: '*',
    name: 'Página_no_encontrada',
    component: ErrorPagina,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
