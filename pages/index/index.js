// index.js

Page({
  data: {
    //是否隐藏
    hidden:true,

    //样式名称
    className:'',

    //菜单列表
    menuList:[
      {
        name:"菜单一",
        src:"/images/home.png",
        url:""
      },
      {
        name:"菜单二",
        src:"/images/hot.png",
        url:""
      },
      {
        name:"菜单三",
        src:"/images/my.png",
        url:""
      },
      {
        name:"菜单四",
        src:"/images/look.png",
        url:""
      },
      {
        name:"菜单五",
        src:"/images/shop.png",
        url:""
      }
    ]
  },
  onShow(){
    //自定义tabbar
    if(typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  handleClick:function(){
    let hidden = this.data.hidden
    this.setData({
      hidden: !hidden,
      className: !hidden ? 'hide' : 'show'
    })
  }
})
