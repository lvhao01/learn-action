const env = process.env || {};
const FROM_EMAIL=env.FROM_EMAIL||'1274714546@qq.com';//发送邮箱
const EMAIL_PASS=env.EMAIL_PASS||'wzcqokfloydkbadd';//发送邮箱的授权码
const EMAIL_TO=env.EMAIL_TO;//发送给谁
module.exports = {
  FROM_EMAIL,
  EMAIL_PASS,
  EMAIL_TO,
};


