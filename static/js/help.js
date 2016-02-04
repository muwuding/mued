/*
* 帮助中心
* muwuding
*/

var helpHandler = window.helpHandler || {};

// 渲染页面
helpHandler.init = function(t) {

  var id = window.location.hash.substr(1);

  if(id && (id.length > 0)){
    $('.mu-ajax-window-content').load('./' + id + '.html', function(res, status, xhr){
      if(status === 'success'){
        $('.mu-ajax-window').fadeIn(t);
      } else{
        $('.mu-ajax-window-content').html('页面不在了');
        $('.mu-ajax-window').fadeIn(t);
      }
    });
  }
};

// 关闭详情弹窗
helpHandler.close = function() {

  $(document).on('click', '.mu-ajax-window-close', function(){
    $(this).closest('.mu-ajax-window').fadeOut(50);
    window.location.hash = '';
  });

  $(document).on('click', '.list-item', function() {
    setTimeout(function(){
      helpHandler.init(250);
    }, 100);
  });
};

// 初始化
$(document).ready(function() {
  helpHandler.init(600);
  helpHandler.close();
});