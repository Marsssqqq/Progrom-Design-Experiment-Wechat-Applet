// pages/xty/xty.js
//const db = wx.cloud.database()
var app=getApp();
Page({

  data: {
   show:false,
   teacherList:"",
   teacherName: "",
   indexList:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
   testList:['A','B','C','D','E'],
  },

  //获取用户所选教师的姓名
rTeacherName: function (event) {
  var {name,tid}=event.currentTarget.dataset;
  //只有当js为name、yuanxi wxml中为data-name、data-yuanxi时 才可以以以上方式赋值
  getApp().globalData.selectTeacherId=tid;
  /*getApp().globalData.selectTeacherYuanxi=yuanxi;*/
  //已在index中获取
  // 取得下标
  //var idx= parseInt(event.currentTarget.dataset.teacherid);
  //getApp().globalData.selectTeacher=teacherName[idx].name;
  wx.navigateTo({
    url: "../teacherPage/teacherPage",
  })
},

getNameF(){
  var yuanxi=getApp().globalData.selectTeacherYuanxi;
  wx.showLoading({
    title: '数据加载中',
    mask:true
  })
wx.cloud.callFunction({
     name:"teacherPool",
     data: {
      type: "teacherName",
      yuanxi: yuanxi,
      //this.data.selectTeacherYuanxi,
    },
   }).then(res=>{
    console.log(res)
    this.setData({
      teacherName:res.result.data
    })
    wx.setStorageSync('teacherName',res.result.data)
    wx.setStorageSync('yuanxi',yuanxi)
    wx.hideLoading()
   })
  },

  
   //生命周期函数--监听页面加载
  onLoad: function (options) {
   let yuanxi=wx.getStorageSync('yuanxi');
   let teacherName=wx.getStorageSync('teacherName');
   if (yuanxi==getApp().globalData.selectTeacherYuanxi&&teacherName)
   {
    console.log('走了走了走了走了来着')
    this.setData({
      teacherName:teacherName
    })
   }
   else{
    console.log('awawawawaaw')
    this.getNameF();
   }
    
   // this.getDate();
  
  },


  onReady: function () {
    
  },

  
   // 生命周期函数--监听页面显示
  onShow: function () {
   
  },

 
  //生命周期函数--监听页面隐藏
  onHide: function () {
    
  },

  
   // 生命周期函数--监听页面卸载
  onUnload: function () {
    
  },


   // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {
    
  },

 
   // 页面上拉触底事件的处理函数
  onReachBottom: function () {
    
  },

  
  //用户点击右上角分享
  onShareAppMessage: function () {
    
  }
})
