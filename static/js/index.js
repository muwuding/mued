(function(){
  var logo=document.querySelector(".logo"), // 导演
      tao=document.querySelector(".pao"), // 逃跑
      mdW=logo.offsetWidth, // 导演的宽度
      mdH=logo.offsetHeight, // 导演的高度
      W=window.innerWidth, // 屏幕宽度
      ox=0,
      oy=0,
      vx=0,
      vy=0,
      ox1=0,
      oy1=0,
      vx1=0,
      vy1=0,
      spring=0.02,
      gravity=1.5,
      friction=0.9,
      mouse={x:0,y:0}; // 鼠标初始位置

   window.animFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(fn){
     return setTimeout(fn,1000/60);
   };

   // 运动函数
   function setMove(obj,x,y){
     obj.style.transform=obj.style.webkitTransform="translate3d("+x+"px,"+y+"px,0)";
   }

   function setDir(){
      tao.style.transform=tao.style.transform="translate3d("+mouse.x+"px,"+mouse.y+"px,0) rotate("+(Math.atan2(oy1-mouse.y,ox1-mouse.x)*180/Math.PI)+"deg)";
   }

   function rand(a,b){
     return Math.random()*(b-a)+a;
   }
   function taopao(){  //逃跑
     vx1+=(mouse.x-ox1)*spring;
     vy1+=(mouse.y-oy1)*spring+gravity;
     vx1*=friction;
     vy1*=friction;

     ox1+=vx1;
     oy1+=vy1;

     setMove(logo,ox1,oy1);
     setDir();
     animFrame(taopao);
   }

   document.addEventListener("mousemove",function(e){
      mouse.x=e.clientX;
      mouse.y=e.clientY;
   },false);

  setTimeout(function(){
    W=window.innerWidth;
    taopao();
  },500);
})();