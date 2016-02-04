/*
* 资源库
* muwuding
*/

var muHandler = window.muHandler || {};

// 渲染页面
muHandler.init = function() {

  var id = window.location.hash.substr(1);

  if(id && (id.length > 0)){
    $('.mu-ajax-window-content').load('./' + id + '.html', function(res, status, xhr){
      if(status === 'success'){
        $('.mu-ajax-window').fadeIn(150);
      } else{
        $('.mu-ajax-window-content').html('页面不在了');
        $('.mu-ajax-window').fadeIn(150);
      }
    });
  }
};

// 关闭详情弹窗
muHandler.close = function() {

  $(document).on('click', '.mu-ajax-window-close', function(){
    $(this).closest('.mu-ajax-window').fadeOut(50);
    window.location.hash = '';
  });

  $(document).on('click', '.list-item', function() {
    setTimeout(muHandler.init, 100);
  });
};

// 初始化
$(document).ready(function() {
  muHandler.init();
  muHandler.close();
});