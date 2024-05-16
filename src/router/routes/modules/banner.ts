import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const banner: AppRouteModule = {
  path: 'banner-setting',
  name: 'Banner',
  component: LAYOUT,
  redirect: '/banner-setting/index',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    hideChildrenInMenu: true,
    title: 'banner管理',
  },
  children: [
    {
      path: 'index',
      name: 'Index',
      component: () => import('@/views/banner/index.vue'),
      meta: {
        title: 'banner管理',
      },
    },
  ],
};

export default banner;
