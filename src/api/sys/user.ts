import { defHttp } from '@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoModel,
  GetSiteInfoModel,
  GetMenuInfoModel,
} from './model/userModel';

import { ErrorMessageMode } from '#/axios';

enum Api {
  GetSiteInfo = '/site',
  Login = '/user/token',
  Logout = '/logout',
  GetUserInfo = '/user/info/token',
  GetMenuInfo = '/user/menus',
  GetPermCode = '/getPermCode',
  TestRetry = '/testRetry',
}
/**
 * 获取网站租户信息
 */
export function getSiteInfo() {
  return defHttp.get<GetSiteInfoModel>(
    { url: Api.GetSiteInfo },
    { errorMessageMode: 'none', apiUrl: '/gateway', withToken: false },
  );
}
/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo(token: string) {
  return defHttp.get<GetUserInfoModel>(
    {
      url: `${Api.GetUserInfo}/${token}`,
    },
    { errorMessageMode: 'none' },
  );
}

export function getMenuInfo() {
  return defHttp.post<GetMenuInfoModel[]>(
    {
      url: Api.GetMenuInfo,
    },
    {
      errorMessageMode: 'none',
    },
  );
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}
