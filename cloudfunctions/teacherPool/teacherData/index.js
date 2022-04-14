// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  var yuanxi=event.yuanxi;
  var name=event.name;
  
  return await db.collection("xty_teacherList").where({
    yuanxi:yuanxi,
    name:name,
  }).get() 
}

