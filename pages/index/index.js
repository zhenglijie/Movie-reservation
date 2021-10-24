// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getPhoneNumber:'',
    getPwd:''
  },
  NumberInput:function(e) {
    this.setData({
      getPhoneNumber:e.detail.value
    })
  },
  codeInput: function(e) {
    this.setData({
      getPwd:e.detail.value
    })
  },
  login:function() {
    let str = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/

    if (this.data.getPhoneNumber == '') {
      wx.showToast({
        title: '输入手机号为空！',
        icon:'none',
        duration:2000
      })
    } else if (this.data.getPwd == '') {
      wx.showToast({
        title: '输入密码为空！',
        icon:'none',
        duration:2000
      })
    } else {
      if (str.test(this.data.getPhoneNumber)) {
        wx.navigateTo({
          url: '/pages/seats/seats',
        })
      } else {
        wx.showToast({
          title: '手机号输入不合法',
          icon:'none',
          duration:2000
        })
      }

      
    }
  }
})