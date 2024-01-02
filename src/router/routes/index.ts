import { RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layout/index.vue'
const routes:RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/redirect/:path(.*)',
  //       component: () => import('@/views/redirect')
  //     }
  //   ]
  // },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
      },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/about/index.vue'),
        }
    ]
  },
]

export default routes