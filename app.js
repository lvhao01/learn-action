


const {getTimeD} = require('./tool.js');
const {FROM_EMAIL,EMAIL_PASS,EMAIL_TO,LOG} = require('./env')
const nodemailer = require('nodemailer'); //发送邮件的node插件
const htmlContent=`
<div style="width:100px;text-align: center;margin:15em auto 0;">
<img style="width:100px;"
src="${LOG}" 
alt="">
</div>
<p style="text-indent: 2em;text-align: center;">亲爱的美少女战士</p>
<p style="text-indent: 2em;text-align: center;">我们已经认识${getTimeD()}啦</p>
<p style="text-indent: 2em;text-align: center;">加油干，努力吧苟！富贵，勿相忘！</p>
`;
function sendEmail (){
    let transporter = nodemailer.createTransport({
        service: 'QQ', // 发送者的邮箱厂商，支持列表：https://nodemailer.com/smtp/well-known/
        port: 465, // SMTP 端口
        secureConnection: true, // SSL安全链接
        auth: {   //发送者的账户密码
            user: FROM_EMAIL, //账户
            pass: EMAIL_PASS, //smtp授权码，到邮箱设置下获取
        }
    });
    let mailOptions = {
        from: `"甜甜甜" <${FROM_EMAIL}>`, // 发送者昵称和地址
        to: EMAIL_TO, // 接收者的邮箱地址
        subject: '奥里给主题', // 邮件主题
        html:htmlContent
    };
    //发送邮件
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          throw new Error(toString(error));
          return error;
        }
        // console.log('邮件发送成功 ID：', info.messageId);
    }); 
    
}

sendEmail()


