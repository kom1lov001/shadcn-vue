import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: () => import('@/layouts/shadcn/MainView.vue'),
    //   children: [
    //     {
    //       path: '/',
    //       redirect: '/dashboard',
    //     },
    //     {
    //       path: 'dashboard',
    //       name: 'dashboard-view',
    //       component: () => import('@/layouts/DashboardView.vue'),
    //     },
    //   ],
    // },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/layouts/shadcn/MainView.vue'),
      children: [
        {
          path: '/',
          redirect: '/dashboard',
        },
        {
          path: 'dashboard',
          name: 'dashboard-view',
          component: () => import('@/views/shadcn/DashboardView.vue'),
        },
      ],
    },
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/auth/LoginView.vue'),
      redirect: '/login',
      children: [
        {
          path: 'login',
          name: 'login-view',
          meta: {
            title: 'Login Auth',
          },
          component: () => import('@/views/auth/components/Login.vue'),
        },
        {
          path: 'signup',
          name: 'signup-view',
          meta: {
            title: 'Signup Auth',
          },
          component: () => import('@/views/auth/components/Signup.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/404/404.vue'),
    },
  ],
})

export default router
