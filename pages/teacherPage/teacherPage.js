var app=getApp();

Page({
  data: {
    teacherInfo:"",
    topics: {},
  },

  getData(options){
    wx.showLoading({
      title: '数据加载中',
      mask:true
    })
  wx.cloud.callFunction({
       name:"teacherPool",
       data: {
        type: "teacherData",
        yuanxi:getApp().globalData.selectTeacherYuanxi,
        Tid:getApp().globalData.selectTeacherId
      },
     }).then(res=>{
      console.log(res)
      this.setData({
        teacherInfo:res.result.data
      })
      wx.hideLoading()
     })
    },

  getComment() {
  wx.cloud.callFunction({
    name:"teacherPool",
    data: {
     type: "commentData", 
     Tid:getApp().globalData.selectTeacherId
   },
    }).then(res=>{
      console.log("评论数据",res.result.data)
      this.setData({
       topics: res.result.data    
      })
      wx.stopPullDownRefresh();
    })    
  },

  //生命周期函数--监听页面加载
  onLoad: function (options) {
   this.getData(),
   this.getComment()

  },

  
   //生命周期函数--监听页面初次渲染完成
  onReady: function () {
  
  },

 
   // 生命周期函数--监听页面显示
  onShow: function () {
    if (getApp().globalData.commentFlag==true)
    {
      getApp().globalData.commentFlag=false,
      this.getComment()
    }
  },

  
    //生命周期函数--监听页面隐藏
  onHide: function () {
    
  },

  
   // 生命周期函数--监听页面卸载
  onUnload: function () {
   // wx.navigateTo({
  //    url: '../teacherList/teacherList'
   // })
  },

  
    //页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {
    
  },

  
   // 页面上拉触底事件的处理函数
  onReachBottom: function () {
    
  },

  
   //用户点击右上角分享
  onShareAppMessage: function () {
    
  }
})
