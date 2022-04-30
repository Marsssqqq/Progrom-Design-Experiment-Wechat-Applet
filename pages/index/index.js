// pages/index/index.js
var app=getApp();

Page({

  data: {
    collegeInfo:'',
    activeName: '',
    active: 0,
  },

  //获取用户所选学院
  rYuanxi: function (event) {
    var yuanxi=event.currentTarget.dataset.selectyuanxi;
    console.log(yuanxi);
    //只有当js为name、yuanxi wxml中为data-name、data-yuanxi时 才可以以以上方式赋值
    //console.log(name);
    getApp().globalData.selectTeacherYuanxi=yuanxi;
    // 取得下标
    //var idx= parseInt(event.currentTarget.dataset.teacherid);
    //getApp().globalData.selectTeacher=teacherName[idx].name;
   /* wx.navigateTo({
      url: "../teacherPage/teacherPage",
    })*/
  },

  onChange(event) {
    this.setData({
      activeName: event.detail,
    })
  },

  onLoad: function (options) {
    let collegeInfo=wx.getStorageSync('collegeInfo');
    if(collegeInfo){
      this.setData({
        collegeInfo:collegeInfo
       })
    }
    else{
    this.getCollegeInfo()
    }
  },

  getCollegeInfo(){
    wx.showLoading({
      title: '数据加载中',
      mask:true
    })
  wx.cloud.callFunction({
       name:"teacherPool",
       data: {
        type: "college",
      },
     }).then(res=>{
      console.log(res)
      this.setData({
       collegeInfo:res.result.data
      })
      wx.setStorageSync('collegeInfo', res.result.data)
      wx.hideLoading()
     })
    },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})