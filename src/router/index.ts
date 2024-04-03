import { createRouter, createWebHistory } from 'vue-router';
import CartelaAdd from '@/components/CartelaAdd.vue';
import BoxInfoPartida from '@/components/BoxInfoPartida.vue';

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      name: 'BoxInfoPartida',
      component: BoxInfoPartida,
    },
  ],
});

export default router;
