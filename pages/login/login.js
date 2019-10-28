Page({
  data: {
    // 判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false
  },

  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '用户授权',
    })
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              wx.reLaunch({
                url: '/pages/index/index'
              })
            }
          });
        } else {
          that.setData({
            isHide: true
          });
        }
      }
    });
  },

  bindGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      // 用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      that.setData({
        isHide: true
      });
      wx.login({
        success: res => {
          // 获取到用户的 code 之后：res.code
          console.log("用户的code:" + res.code);
          wx.reLaunch({
            url: '/pages/index/index'
          })
          // 可以传给后台，再经过解析获取用户的 openid
          // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
          // wx.request({
          //     // 自行补上自己的 APPID 和 SECRET
          //     url: 'http://127.0.0.1:8081/mcd/wechat/login?code=' + res.code,
          //     header: {
          //       'content-type': 'application/json',
          //       'auto-token' : '123'
          //     },
          //     success: res => {
          //         console.log(res);
          //         wx.reLaunch({
          //           url: '/pages/index/index'
          //         })
          //     }
          // });
        }
      });
    } else {
      // 用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function(res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  }
})