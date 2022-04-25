import { createRouter, createWebHistory } from 'vue-router';
import MainDashboard from './pages/MainDashboard.vue';
import Login from './pages/Login.vue';
import Signup from './pages/Signup.vue';

const routes = [
  { path: '/', component: MainDashboard },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
