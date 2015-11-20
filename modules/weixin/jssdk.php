<?php
require_once "../../server/jssdk.php";
$jssdk = new JSSDK("wx8037c793f19f110b", "1b3bf9a588caabe87504a036b6928b94");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <meta name="renderer" content="webkit">
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta name="description" content="木屋顶,时节到,花自开">
  <meta name="keywords" content="木屋顶">
  <title>微信JSSDK测试</title>
  <link href="../../common/css/common.css?ver=6.0.1" rel="stylesheet">
  <link href="css/jssdk.css?ver=6.0.1" rel="stylesheet">
</head>
<body>
  <header>
    <img src="../../common/images/logo_200.jpg">
  </header>
  <section>
    <ul class="clearfix">
      <li id="chooseImage">选取图片</li>
      <li id="previewImage">预览图片</li>
      <li id="uploadImage">上传图片</li>
      <li id="downloadImage">下载图片</li>
    </ul>
    <ul class="clearfix">
      <li id="startRecord">开始录音</li>
      <li id="stopRecord">停止录音</li>
      <li id="playVoice">播放录音</li>
      <li id="pauseVoice">暂停录音</li>
      <li id="stopVoice">停止播放</li>
      <li id="uploadVoice">上传录音</li>
      <li id="downloadVoice">下载录音</li>
      <li></li>
    </ul>
    <ul class="clearfix">
      <li id="getNetworkType">网络状态</li>
      <li id="openLocation">内置地图</li>
      <li id="getLocation">地理位置</li>
      <li></li>
    </ul>
    <ul class="clearfix">
      <li id="hideOptionMenu">隐藏菜单</li>
      <li id="showOptionMenu">显示菜单</li>
      <li id="scanQRCode">微信扫扫</li>
      <li></li>
    </ul>
  </section>
  <footer>
    <a href="http://www.miitbeian.gov.cn" title="欢迎查证">粤ICP备15095650号</a>
  </footer>
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script src="js/jssdk.js"></script>
<script>
wx.config({
  debug: false,
  appId: '<?php echo $signPackage["appId"];?>',
  timestamp: <?php echo $signPackage["timestamp"];?>,
  nonceStr: '<?php echo $signPackage["nonceStr"];?>',
  signature: '<?php echo $signPackage["signature"];?>',
  jsApiList: [
    // 所有要调用的 API 都要加到这个列表中
    'onMenuShareTimeline',
    'chooseImage',
    'startRecord',
    'stopRecord'
  ]
});
</script>
<script>
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?39b7f0311c93949c6beb92e94bc2ff8d";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
</script>
</html>