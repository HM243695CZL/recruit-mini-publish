export default {
  pages: [
    'pages/index/index',
    'pages/user/index',
  ],
  tabBar: {
    color: '#000',
    selectedColor: '#ff6146',
    list: [
      {
        iconPath: 'static/img/home.png',
        selectedIconPath: 'static/img/home-select.png',
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        iconPath: 'static/img/user.png',
        selectedIconPath: 'static/img/user-select.png',
        pagePath: 'pages/user/index',
        text: '个人中心'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#36c1ba',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  }
}
