// pages/profile/profile.js
const app = getApp();

//import util
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    imgUrls: [
      '../../assets/truck/01.jpg',
      '../../assets/truck/02.jpg'
    ],
    links: [
      // '../user/user',
      // '../user/user',
      // '../user/user'
    ],
    _tabIndex: 0
  },

  //
  swiperChange: function(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //
  changeEvent: function(e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  //
  swipclick: function(e) {
    console.log(this.data.swiperCurrent);
    wx.switchTab({
      // url: this.data.links[this.data.swiperCurrent]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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