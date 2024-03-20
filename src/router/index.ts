import { createRouter, createWebHistory } from 'vue-router';
import CartelaAdd from '@/components/CartelaAdd.vue';

const router = createRouter({
  history: createWebHistory('http://localhost:3633'),
  routes: [
    {
      path: '/',
      name: 'CartelaAdd',
      component: CartelaAdd,
    },
  ],
});

export default router;
