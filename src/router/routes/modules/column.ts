import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const column: AppRouteModule = {
  path: 'column',
  name: 'Column',
  component: LAYOUT,
  redirect: '/column/index',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    hideChildrenInMenu: true,
    title: '栏目管理',
  },
  children: [
    {
      path: 'index',
      name: 'Index',
      component: () => import('@/views/column/index.vue'),
      meta: {
        title: '栏目管理',
      },
    },
  ],
};

export default column;
