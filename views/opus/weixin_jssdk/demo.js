wx.ready(function () {
  // 在这里调用 API
  wx.onMenuShareTimeline({
      title: '这是我自己的分享', // 分享标题
      link: 'http://www.baidu.com', // 分享链接
      imgUrl: '', // 分享图标
      success: function () {
          // 用户确认分享后执行的回调函数
          alert("分享成功");
      },
      cancel: function () {
          // 用户取消分享后执行的回调函数
      }
  });
});

document.querySelector('#startRecord').onclick = function () {
  wx.startRecord({
    cancel: function () {
      alert('用户拒绝授权录音');
    }
  });
};

// 4.3 停止录音
document.querySelector('#stopRecord').onclick = function () {
  wx.stopRecord({
    success: function (res) {
      voice.localId = res.localId;
    },
    fail: function (res) {
      alert(JSON.stringify(res));
    }
  });
};

var images = {
      localId: [],
      serverId: []
    };

document.querySelector('#chooseImage').onclick = function () {
  wx.chooseImage({
    success: function (res) {
      images.localId = res.localIds;
      alert('已选择 ' + res.localIds.length + ' 张图片');
    }
  });
};