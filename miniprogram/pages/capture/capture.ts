Page({
  data: {
    imagePath: '',
  },

  onLoad() {
    console.log('page_capture_view')
  },

  goBack() {
    wx.navigateBack()
  },

  takePhoto() {
    console.log('click_take_photo')

    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],

      // 调试阶段同时支持拍照和相册
      // 真正测试时可以改回 ['camera']
      sourceType: ['camera', 'album'],

      camera: 'back',

      success: (result) => {
        let imagePath = ''

        // 不使用 result.tempFiles?.[0]，兼容预览编译
        if (
          result &&
          result.tempFiles &&
          result.tempFiles.length > 0 &&
          result.tempFiles[0] &&
          result.tempFiles[0].tempFilePath
        ) {
          imagePath = result.tempFiles[0].tempFilePath
        }

        if (!imagePath) {
          wx.showToast({
            title: '没有获取到照片',
            icon: 'none',
          })
          return
        }

        this.setData({
          imagePath: imagePath,
        })

        console.log('capture_photo_success', imagePath)
      },

      fail: (error) => {
        console.error('capture_photo_fail', error)

        let errorMessage = ''

        if (error && error.errMsg) {
          errorMessage = String(error.errMsg)
        }

        if (errorMessage.indexOf('cancel') !== -1) {
          return
        }

        wx.showModal({
          title: '无法获取照片',
          content: errorMessage || '请检查微信的相机和相册权限',
          showCancel: false,
        })
      },
    })
  },

  retakePhoto() {
    console.log('click_retake_photo')

    this.setData({
      imagePath: '',
    })

    this.takePhoto()
  },

  confirmPhoto() {
    const imagePath = this.data.imagePath

  if (!imagePath) {
    wx.showToast({
      title: '请先拍摄照片',
      icon: 'none',
    })
    return
  }

  console.log('click_confirm_photo', imagePath)

  wx.navigateTo({
    url:
      '/pages/scan/scan?imagePath=' +
      encodeURIComponent(imagePath),
  })
  },
})