import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const resource: AppRouteModule = {
  path: 'resource',
  name: 'Resource',
  component: LAYOUT,
  redirect: '/resource/index',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    hideChildrenInMenu: true,
    title: '资源管理',
  },
  children: [
    {
      path: 'index',
      name: 'Index',
      component: () => import('@/views/resource/index.vue'),
      meta: {
        title: '资源管理',
      },
    },
  ],
};

export default resource;
