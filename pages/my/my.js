// pages/my/my.js
Page({

  data: {

  },

  onShow(){
    //自定义tabbar
    if(typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  }
})