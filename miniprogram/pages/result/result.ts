Page({
  data: {
    imagePath: '',
  },

  onLoad(options) {
    const imagePath = options.imagePath
      ? decodeURIComponent(options.imagePath)
      : ''

    this.setData({
      imagePath: imagePath,
    })

    wx.vibrateShort({
      type: 'medium',
    })

    console.log('page_result_view')
  },

  claimCard() {
    console.log('click_claim_first_card')

    wx.showToast({
      title: '昆虫卡已收入图鉴',
      icon: 'success',
      duration: 1500,
    })
  },

  goHome() {
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },
})