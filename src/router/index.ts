import { createRouter, createWebHistory } from 'vue-router';
/* import FriendAdder from '@/components/FriendAdder.vue'; */
/* import HomeView from '@/views/HomeView.vue'; */
import CartelaAdd from '@/components/CartelaAdd.vue';
/* import TodoView from '@/views/TodoView.vue'; */

const router = createRouter({
  history: createWebHistory('http://localhost:3633'),
  routes: [
    {
      path: '/',
      name: 'CartelaAdd',
      component: CartelaAdd,
    }, /*  {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/todos/edit/:id',
      name: 'todo',
      component: TodoView,
    }, */
  ],
});

export default router;
