

function timeDifference(startTime, endTime){ //计算时间差(分钟)
  //传入的参数格式要求(2020-01-01 10:10:10)
  var date1 = new Date(startTime.replace(/\-/g, "/")); //开始时间
  var date2 = new Date(endTime.replace(/\-/g, "/")); //结束时间
  var date3 = date2.getTime() - date1.getTime(); //时间差的毫秒数
  //计算出相差天数
  var days = Math.floor(date3 / (24 * 3600 * 1000));
  //计算出小时数
  var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
  var hours = Math.floor(leave1 / (3600 * 1000));
  //计算相差分钟数
  var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave2 / (60 * 1000));
  //计算相差秒数
  var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
  var seconds = Math.round(leave3 / 1000);
  return "已经 " + days + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ";
}
function getCurrentDate(length = 19) {
  let date = new Date()
  return `${date.toLocaleDateString()}&${date.toTimeString().slice(0,8)}`.replace(/(\d{4})\/(\d{1,})\/(\d{1,})&/, (all, s1, s2, s3) => {
      return `${s1}-${('0'+s2).slice(-2)}-${('0'+s3).slice(-2)} `
  }).slice(0, length)
}

function getTimeD(){
  return timeDifference('2021-06-04 00:00:00' ,getCurrentDate());
} 


module.exports={
  getTimeD,
}


