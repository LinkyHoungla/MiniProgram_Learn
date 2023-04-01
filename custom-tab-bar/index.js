// custom-tab-bar/index.js
Component({
  properties: {

  },

  data: {
    selected:null,//当前选中

    //tabbar列表 与app.json一致
    list:[
      {
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/images/home.png",
        "selectedIconPath": "/images/home-active.png"
      },
      {
        "pagePath": "/pages/look/look",
        "text": "看点",
        "iconPath": "/images/look.png",
        "selectedIconPath": "/images/look-active.png"
      },
      {
        "pagePath": "/pages/my/my",
        "text": "个人",
        "iconPath": "/images/my.png",
        "selectedIconPath": "/images/my-active.png"
      },
      {
        "pagePath": "/pages/shop/shop",
        "text": "商铺",
        "iconPath": "/images/shop.png",
        "selectedIconPath": "/images/shop-active.png"
      },
      {
        "pagePath": "/pages/hot/hot",
        "text": "热点",
        "iconPath": "/images/hot.png",
        "selectedIconPath": "/images/hot-active.png"
      }
    ]
  },

  methods:{
    switchTab(e) {
      const {index, url} = e.currentTarget.dataset;
      if(this.data.selected == index || index == undefined) return
      wx.switchTab({
        url,
      })
    }
  }
})
