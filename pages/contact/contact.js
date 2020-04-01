// pages/contact/contact.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Height: 0,
    scale: 14,
    latitude: 34.7705300000,
    longitude: 113.6510800000,
    markers: [],
    controls: [{
        id: 1,
        iconPath: '../../assets/map/one.png',
        position: {
          left: 280,
          top: 100 - 70,
          width: 20,
          height: 20
        },
        clickable: true
      },
      {
        id: 2,
        iconPath: '../../assets/map/ten.png',
        position: {
          left: 310,
          top: 100 - 70,
          width: 20,
          height: 20
        },
        clickable: true
      }
    ],
    circles: [{
      // longitude: "113.65742",
      // latitude: "34.776805",
      color: '#FF0000DD',
      fillColor: '#7cb5ec88',
      radius: 0,
      strokeWidth: 2
    }]

  },

  onLoad() {
    // this.setData({ iconPath: iconPath })
    this.openLocation();
  },

  ///** */
  openLocation() {
    console.log(this.data);
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      scale: 28,
      name: '郑州平安搬家',
      address: '郑州市金水区文化路与农业路'
    })
  },

  ///* */
  to_call: function() {
    wx.showModal({
      title: "0371-55555288",
      confirmText: "呼叫",
      confirmColor: "#D81E06",
      cancelText: "取消",
      cancelColor: '#D81E06',
      success: function(res) {
        if (res.confirm) {
          wx.makePhoneCall({
            phoneNumber: "0371-55555288"
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;

    wx.getSystemInfo({
      success: function(res) {
        _this.setData({
          view: {
            // Height: res.windowHeight / 2
            Height: 430
          }

        })

      }
    })

    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        _this.setData({
          // latitude: res.latitude,
          // longitude: res.longitude,
          latitude: 34.7705300000,
          longitude: 113.6510800000,
          markers: [{
            id: "1",
            // latitude: res.latitude,
            // longitude: res.longitude,
            latitude: 34.7705300000,
            longitude: 113.6510800000,
            width: 38,
            height: 38
            //iconPath: "../../assests/map/xxx.png",
            // title: "郑州平安搬家服务公司"

          }],
          circles: [{
            // latitude: res.latitude,
            // longitude: res.longitude,
            latitude: 34.7705300000,
            longitude: 113.6510800000,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: 0,
            strokeWidth: 1
          }]

        })
      }

    })

  },

  regionchange(e) {
    console.log("regionchange===" + e.type)
  },

  //click merkers
  markertap(e) {
    console.log(e.markerId)
    wx.showActionSheet({
      itemList: ["郑州平安搬家服务公司"],
      success: function(res) {
        console.log(res.tapIndex)
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  },

  //点击缩放按钮动态请求数据
  controltap(e) {
    var that = this;
    console.log("scale===" + this.data.scale)
    if (e.controlId === 1) {
      // if (this.data.scale === 13) {
      that.setData({
        scale: --this.data.scale
      })
      // }
    } else {
      //  if (this.data.scale !== 13) {
      that.setData({
        scale: ++this.data.scale
      })
      // }
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})