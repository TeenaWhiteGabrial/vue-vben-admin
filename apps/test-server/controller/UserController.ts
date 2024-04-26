import UserService from '../service/UserService';

class UserController {
  private service: UserService = new UserService();

  login = async (ctx) => {
    ctx.body = await this.service.login();
  };

  getUserInfoById = async (ctx) => {
    ctx.body = await this.service.getUserInfoById();
  };
  addUser = async (ctx) => {
    const postData = ctx.request.body;
    console.log(`koaBody获取到的post数据===>`, postData);
    ctx.body = await this.service.addUser(postData);
  };
}

export default new UserController();
