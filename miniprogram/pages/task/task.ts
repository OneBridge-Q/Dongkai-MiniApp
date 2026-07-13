Page({
  onLoad() {
    console.log('page_task_view')
  },

  goBack() {
    wx.navigateBack()
  },

  beginMission() {
    console.log('click_begin_ant_mission')

    wx.navigateTo({
      url: '/pages/capture/capture',
    })
  },
})