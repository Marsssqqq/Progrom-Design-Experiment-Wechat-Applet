// pages/first/first.js
const db = wx.cloud.database()
Page({
  data: {
    nameInfo:"",
    indexList:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    show:true,
  },

  goHome(){
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },
  getComment(){
    wx.navigateTo({
      url: '/pages/comment/comment'
    })
  },

  getUserInfo(){
  let userInfo=wx.getStorageSync('userInfo');
  //检测之前是否授权过
  if(userInfo && userInfo.nickName){
    console.log("已授权")
   }
  else{
    this.userInfo();
    }
  },

  userInfo(){
    wx.getUserProfile({
      desc:'用户名授权需要',
      success:res=>{
        console.log(res);
        wx.setStorageSync('userInfo',res.userInfo)
       },
       fail:res=>{
         console.log(res)
       }
     })
  },

  getName(){
    db.collection('test1').where({
      college:1
    }).get().then(res=>{
      console.log(res.data[0].nameInfo)
      var name=res.data[0].nameInfo;
      this.setData({
        nameInfo:name,
        show:false
      })
    })
  },


  onLoad: function () {
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