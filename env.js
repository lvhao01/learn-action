const env = process.env || {};

module.exports = {
  FROM_EMAIL: env.FROM_EMAIL??'1274714546@qq.com',//发送邮箱
  EMAIL_PASS: env.EMAIL_PASS??'wzcqokfloydkbadd',//发送邮箱的授权码
  EMAIL_TO: env.EMAIL_TO,//发送给谁
};


