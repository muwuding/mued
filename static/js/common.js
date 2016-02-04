/*
* name:    公用方法
* version: 1.0
* update:  2016-2-4
*/

! function (global, factory) {
  "function" == typeof define && (define.amd || define.cmd) ? define(function () {
    return factory(global);
  }) : factory(global, !0)
}(this, function (global, factory){

  var ua = navigator.userAgent.toLowerCase(), // 浏览器标识
      isAndroid = -1 != ua.indexOf("android"), // 安卓版
      isIos = -1 != ua.indexOf("iphone") || -1 != ua.indexOf("ipad"), // IOS版
      J_mu; // JS对象

  J_mu = {

    /*主机名*/
    host: window.location.protocol + "//" + window.location.host,

    /*获取url中的参数*/
    getUrlParam : function(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'),
          r = window.location.search.substr(1).match(reg);

      if(r != null){
        return unescape(r[2]);
      } else{
        return null;
      }
    },

    /*生成唯一数*/
    onlyNum : function() {
      var num = '',
        timestamp = '',
        randomNum = '';

      timestamp = (new Date()).valueOf();

      for(var r = 0; r < 6; r++) {
        randomNum +=Math.floor(Math.random()*10);
      }
      num = timestamp + randomNum;
      return num;
    },

    /*为空处理*/
    isNull : function(text) {
       if(typeof text === "undefined" || text === null){
         return '';
       }else{
         return text;
       }
    },

    /*AJAX请求封装，data需传递对象*/
    ajax : function(url,data,callback,error){
      $.ajax({
        type: "POST",
        url : url,
        data: data,
        dataType:"json",
        success: callback,
        error: function(){
          if(error){
            error();
          }else{
            console.log("请求失败");
          }
        }
      });
    },

    /*计算时间差，参数为时间戳*/
    timeDifference : function(timestamps) {

      var formatNumber = function(n) {
        if(n < 10) {
          n = '0' + n;
        }
        return n;
      };

      var originalTime = new Date(timestamps),
          currentTime = (new Date()).getTime(),
          interval = currentTime - timestamps,
          days,
          hours,
          minutes,
          seconds,
          timeHtml = '';

      days = Math.floor(interval / (24 * 3600 * 1000)); //相差天数
      hours = Math.floor(interval / (3600 * 1000)); //相差小时数
      minutes = Math.floor(interval / (60 * 1000)); //相差分钟
      seconds = Math.floor(interval / 1000); //相差秒数

      var adjustedYear = originalTime.getFullYear(),
          adjustedMonth = formatNumber((originalTime.getMonth() + 1)),
          adjustedDate = formatNumber(originalTime.getDate()),
          adjustedHours = formatNumber(originalTime.getHours()),
          adjustedMinutes = formatNumber(originalTime.getMinutes()),
          adjustedSeconds = formatNumber(originalTime.getSeconds());

      var nowTime = new Date;

      if(originalTime.getFullYear() == nowTime.getFullYear() && originalTime.getMonth() == nowTime.getMonth() && originalTime.getDate() == nowTime.getDate()) {
        if(seconds < 60) {
          timeHtml = '刚刚';
        } else if (minutes < 60) {
          timeHtml = minutes + '分钟前';
        } else {
          timeHtml = '今天&nbsp;' +
                  adjustedHours + ':' +
                  adjustedMinutes;
        }
      } else if(originalTime.getFullYear() == nowTime.getFullYear() && originalTime.getMonth() == nowTime.getMonth() && originalTime.getDate() == (nowTime.getDate() - 1)) {
        timeHtml = '昨天&nbsp;' +
                adjustedHours + ':' +
                adjustedMinutes;
      } else {
        var yearHtml = '';

        if(adjustedYear != (new Date()).getFullYear()) {
          yearHtml = adjustedYear + '年'
        }

        timeHtml += yearHtml +
                  adjustedMonth + '月' +
                  adjustedDate + '日&nbsp;' +
                  adjustedHours + ':' +
                  adjustedMinutes;
      }
      return timeHtml;
    },

    //提示类弹窗
    niuAlert : function(text, time) {

      if(typeof time === 'undefined' || typeof time !== 'number'){
        time = 2000;
      }

      var _html = [];

      _html.push('<div class="niu-alert">');
      _html.push('<div class="niu-alert-main">' + text + '</div>');
      _html.push('</div>');

      $('body').append(_html.join(''));
      $(".niu-alert").fadeIn();

      setTimeout(function() {
        $('.niu-alert').remove();
      },time);
    },

    //加载失败
    loadFail: function() {

      var _html = [];

      _html.push('<div class="niu-load-fail">');
      _html.push('<div class="niu-load-fail-img">');
      _html.push('<img src="' + J_mu.host + '/static/common/images/icon_fail.png" alt="">');
      _html.push('</div>');
      _html.push('<div class="niu-load-fail-text">抱歉，出错啦！</div>');
      _html.push('</div>');

      $('body').empty().append(_html.join(''));
      $('title').text('请求错误');
    }
  };

  //抛出对象
  factory && (global.J_mu = J_mu);
});