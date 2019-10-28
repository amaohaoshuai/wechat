// pages/settings/settings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      settings: {
        corsInfo: {
          icon: '/images/cors.png',
          name: '参考站连接',
          status: false,
          textStyle: 'red'
        },
        facility: {
          icon: '/images/facility_connect.png',
          name: '设备连接',
          status: false,
          positionMode: 0,
          count: 0,
          textStyle: 'red'
        },
        communicationMode: {
          icon: '/images/common_mode.png',
          name: '差分通信模式'
        }
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: '系统设置',
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})