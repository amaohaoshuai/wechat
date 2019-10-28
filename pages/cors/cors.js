// pages/cors/cors.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    corsInfo: {
      serverIp: '',
      port: '',
      receivePoint: '',
      username: '',
      password: '',
      remark: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let that = this;
    that.setData({
      corsInfo: wx.getStorageSync('corsInfo')
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },
  bindIp: function(e) {
    let that = this;
    that.setData({
      'corsInfo.serverIp': e.detail.value
    })
  },
  bindPort: function(e) {
    let that = this;
    that.setData({
      'corsInfo.port': e.detail.value
    })
  },
  bindRecPoint: function(e) {
    let that = this;
    that.setData({
      'corsInfo.receivePoint': e.detail.value
    })
  },
  bindName: function(e) {
    let that = this;
    that.setData({
      'corsInfo.username': e.detail.value
    })
  },
  bindPwd: function(e) {
    let that = this;
    that.setData({
      'corsInfo.password': e.detail.value
    })
  },
  bindRemark: function(e) {
    let that = this;
    that.setData({
      'corsInfo.remark': e.detail.value
    })
  },
  saveAndUse: function() {
    let that = this;
    let corsInfo = that.data.corsInfo;
    if (!corsInfo.serverIp && !corsInfo.port && !corsInfo.receivePoint &&
      !corsInfo.username && !corsInfo.password) {
      wx.showToast({
        title: '参数不完整！',
        image: '/images/warning.png'
      });
      return;
    }

    wx.showLoading({
      title: '正在连接...',
      mask: true,
      success: res => {
        wx.request({
          url: 'http://127.0.0.1:8081/mcd/cors/connectCors',
          method: 'post',
          header: {
            'content-type': 'application/json',
            'auto-token': '123'
          },
          data: {
            corsInfo: corsInfo
          },
          success: res => {
            if (res.success) {
              wx.setStorage({
                key: 'corsInfo',
                data: that.data.corsInfo,
                success: res => {
                  wx.hideLoading();
                  wx.showToast({
                    title: '连接成功',
                    success: res => {
                      setTimeout(() => {
                        wx.navigateBack();
                      }, 500);
                    }
                  })
                }
              });
            } else {
              wx.hideLoading();
              wx.showToast({
                title: '连接失败',
                image: '/images/error.png'
              })
            }
          },
          fail: res => {
            wx.hideLoading();
            wx.showToast({
              title: '系统错误',
              image: '/images/error.png'
            })
          }
        });
      }
    })
  },
  onlySave: function() {
    let that = this;
    let corsInfo = that.data.corsInfo;
    wx.setStorage({
      key: 'corsInfo',
      data: corsInfo,
      success: res => {
        wx.showToast({
          title: '保存成功'
        })
      }
    })
  }

})