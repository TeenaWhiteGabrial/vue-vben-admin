import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const floor: AppRouteModule = {
  path: 'floor',
  name: 'Floor',
  component: LAYOUT,
  redirect: '/floor/index',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    hideChildrenInMenu: true,
    title: '楼层管理',
  },
  children: [
    {
      path: 'index',
      name: 'Index',
      component: () => import('@/views/floor/index.vue'),
      meta: {
        title: '楼层管理',
      },
    },
  ],
};

export default floor;
