Page({
  data: {
    imagePath: '',
    progress: 8,
    progressStyle: 'width: 8%',
    statusText: '正在读取生命特征',
  },

  timer: 0 as number,

  onLoad(options) {
    const imagePath = options.imagePath
      ? decodeURIComponent(options.imagePath)
      : ''

    this.setData({
      imagePath: imagePath,
    })

    this.startScan()
  },

  onUnload() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },

  startScan() {
    const statusList = [
      {
        value: 8,
        text: '正在读取生命特征',
      },
      {
        value: 32,
        text: '正在分析外形与触角',
      },
      {
        value: 58,
        text: '正在匹配自然记忆库',
      },
      {
        value: 82,
        text: '已找到相似生命档案',
      },
      {
        value: 100,
        text: '记忆恢复成功',
      },
    ]

    let index = 0

    this.timer = setInterval(() => {
      index += 1

      if (index >= statusList.length) {
        clearInterval(this.timer)

        setTimeout(() => {
          wx.redirectTo({
            url:
              '/pages/result/result?imagePath=' +
              encodeURIComponent(this.data.imagePath),
          })
        }, 700)

        return
      }

      const current = statusList[index]

      this.setData({
        progress: current.value,
        progressStyle: 'width: ' + current.value + '%;',
        statusText: current.text,
      })

      if (current.value === 82) {
        wx.vibrateShort({
          type: 'light',
        })
      }
    }, 700)
  },
})