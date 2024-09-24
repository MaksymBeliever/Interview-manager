import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { useUserStore } from '@/stores/user'

const checkAuth = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) => {
  const userStore = useUserStore();

  if (!userStore.userId) {
    next({ name: 'Auth' });
  }

  return next();
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
    beforeEnter: checkAuth
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/AuthPage.vue'),
  },
  {
    path: '/interview/:id',
    name: 'Interview',
    component: () => import('@/views/InterviewPage.vue'),
    beforeEnter: checkAuth
  },
  {
    path: '/interviews',
    name: 'Interviews',
    component: () => import('@/views/InterviewsPage.vue'),
    beforeEnter: checkAuth
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('@/views/StatisticsPage.vue'),
    beforeEnter: checkAuth
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
