Page({
  data: {},

  onLoad() {
    console.log('page_task_view')
  },

  goBack() {
    wx.navigateBack()
  },

  beginMission() {
    console.log('click_begin_ant_mission')

    wx.showToast({
      title: '探索镜头即将开启',
      icon: 'none',
      duration: 1500,
    })
  },
})