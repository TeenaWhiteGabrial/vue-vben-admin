/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  code: string;
  redirectUri: string;
}

export interface RoleInfo {
  id: string;
  name: string;
  roleCode: '';
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  access_token: string;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  // 用户id
  userId: string;
  // 用户名
  userName: string;
  // 显示名称
  displayName: string;
  // 头像
  avatar?: string;
}

/** 获取网站基本信息接口返回值 */
export interface GetSiteInfoModel {
  /** 网站标题 */
  name: string;
  /** 标签页icon */
  icon: string;
  /** 管理端LOGO */
  backlogo: string;
  /** 管理端描述 */
  description: string;
}

/** 获取菜单列表接口返回值 */
export interface GetMenuInfoModel {
  resourceName: string;
  parentId: string;
  sonList?: GetMenuInfoModel[];
  extraInfo: string;
  sort: string;
}
