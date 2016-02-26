/*
* name:    Jquery扩展方法
* version: 1.0
* update:  2016-2-26
*/
(function($){
  $.fn.extend({

    /*
     * muSlideUp：向上定时无缝滚动动画
     * @option.time: 滚动间隔时间
     * @option.speed: 滚动速度
     * 使用方法：$('#demo').muSlideUp({time:5000,speed: 500})
     */
    muSlideUp: function(option){

      var scrollWrap = $(this),
          childHeight = scrollWrap.height(),
          timer;

      //默认参数
      option=$.extend({
        "time":3000,
        "speed":1000
      }, option);

      //向上滑动动画
      function slideUpAnimate(){
        scrollWrap.children().first().animate(
          {marginTop: -childHeight},
          option.speed,
          function(){
            $(this).css("margin-top", 0).appendTo(scrollWrap);
        })
      }

      //自动间隔时间向上滑动
      timer = setInterval(slideUpAnimate, option.time);

      //悬停时停止滑动，离开时继续执行
      scrollWrap.children().hover(function(){
        clearInterval(timer);
      },function(){
        timer = setInterval(slideUpAnimate,option.time);  //继续执行动画
      })
    }
  })
})(jQuery)
