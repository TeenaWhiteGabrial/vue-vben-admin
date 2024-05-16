import type { Router, RouteRecordRaw } from 'vue-router';
import { usePermissionStoreWithOut } from '@/store/modules/permission';
import { useUserStoreWithOut } from '@/store/modules/user';
import { PAGE_NOT_FOUND_ROUTE } from '@/router/routes/basic';
import { useMessage } from '@/hooks/web/useMessage';
import { useGlobSetting } from '@/hooks/setting';
import { isEmpty } from '@/utils/is';
import { useI18n } from '@/hooks/web/useI18n';

const { t } = useI18n();

const { loginUrl = '' } = useGlobSetting();

const { createErrorModal } = useMessage();

export function createPermissionGuard(router: Router) {
  const userStore = useUserStoreWithOut();
  const permissionStore = usePermissionStoreWithOut();
  router.beforeEach(async (to, from, next) => {
    if (!userStore.getSiteInfo || isEmpty(userStore.getSiteInfo)) {
      await userStore.getSiteInfoAction();
    }

    const redirectUri = window.location.origin + window.location.pathname;

    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    // login code exist, reget Token,
    if (code) {
      try {
        await userStore.login({
          code,
          redirectUri,
          mode: 'none',
        });
      } catch (error) {
        createErrorModal({
          title: t('sys.api.errorTip'),
          content: (error as unknown as Error).message || t('sys.api.networkExceptionMsg'),
          getContainer: () => document.body,
        });
        return;
      }
    }
    const token = userStore.getToken;
    // token does not exist, when code does not exist，redirect login page
    if (!token) {
      if (loginUrl) window.location.href = `${loginUrl}${redirectUri}`;
      return;
    }
    if (!userStore.getUserInfo || isEmpty(userStore.getUserInfo)) {
      try {
        await userStore.getUserInfoAction();
      } catch (err) {
        next();
        return;
      }
    }

    // get router permission and menus permission
    if (permissionStore.getIsDynamicAddedRoute) {
      next();
      return;
    }

    const routes = await permissionStore.buildRoutesAction();
    routes.forEach((route) => {
      router.addRoute(route as unknown as RouteRecordRaw);
    });
    router.addRoute(PAGE_NOT_FOUND_ROUTE as unknown as RouteRecordRaw);

    permissionStore.setDynamicAddedRoute(true);

    if (to.name === PAGE_NOT_FOUND_ROUTE.name) {
      // 动态添加路由后，此处应当重定向到fullPath，否则会加载404页面内容
      next({ path: to.fullPath, replace: true, query: to.query });
    } else {
      const redirectPath = (from.query.redirect || to.path) as string;
      const redirect = decodeURIComponent(redirectPath);
      const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
      next(nextData);
    }
  });
}
