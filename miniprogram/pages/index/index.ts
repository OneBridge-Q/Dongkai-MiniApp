Page({
  data: {},

  onLoad() {
    console.log('page_home_view')
  },

  startExplore() {
    console.log('click_start_explore')

    wx.showToast({
      title: '任务即将开启',
      icon: 'none',
      duration: 1500,
    })
  },
})