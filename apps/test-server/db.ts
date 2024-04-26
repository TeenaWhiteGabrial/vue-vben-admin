/** 引入驱动包 */
import { MongoClient } from 'mongodb';

console.log('开始连接数据库');
/** 创建MongoDB客户端实例 */
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

/** 建立连接 */
client.connect();

/** 连接数据库 */
const db = client.db('easy-mock');
console.log('数据库连接成功');
export default db;
