import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const settting: AppRouteModule = {
  path: 'basic-settting',
  name: 'Setting',
  component: LAYOUT,
  redirect: '/basic-settting/index',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    hideChildrenInMenu: true,
    title: '配置管理',
  },
  children: [
    {
      path: 'index',
      name: 'Index',
      component: () => import('@/views/setting/index.vue'),
      meta: {
        title: '配置管理',
      },
    },
  ],
};

export default settting;
