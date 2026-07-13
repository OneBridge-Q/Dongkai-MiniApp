Page({
  data: {},

  onLoad() {
    console.log('page_home_view')
  },

  startExplore() {
    console.log('click_start_explore')

    wx.navigateTo({
      url: '/pages/task/task',
    })
  },
})