// 云函数入口文件
const cloud = require('wx-server-sdk');
const teacherName = require('./teacherName/index');
const teacherData = require('./teacherData/index');
const college = require('./collegeData/index');
cloud.init()
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {

  switch (event.type) {
    case 'teacherName':
      return await teacherName.main(event, context);
    case 'teacherData':
      return await teacherData.main(event, context);  
    case 'college':
      return await college.main(event, context); 

  
}
}
/*
exports.main = async (event, context) => {
return await db.collection("bupt_teacherName").where({
  yuanxi:"xty"
}).get()
}*/


