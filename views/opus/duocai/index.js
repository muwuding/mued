// 执行顺序
var INDEX = 1;
// 元素
var ELE = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// 结果
var RESULT = [];

// 列出所有结果
function allNumber() {
  for(var i=0; i<10; i++){
    for(var j=0; j<10; j++){
      for(var k=0; k<10; k++){
        RESULT.push(ELE[i]+ELE[j]+ELE[k]);
      }
    }
  }
}

// 筛选方法
var factor = {
  funcOne: function() {
    A = A*2;
    console.log('你执行了函数1:' + A);
  },

  funcTwo: function() {
    A = A*3;
    console.log('你执行了函数2:' + A);
  },

  funcThree: function() {
    console.log('你执行了函数3');
  },

  funcFour: function() {
    console.log('你执行了函数4');
  },

  funcFive: function() {
    console.log('你执行了函数5');
  }
};

function funcall(callback){
  callback();
};

$(document).ready(function(){

  var fun = [];

  $('#funcs h1').on('click', function(){
    fun.push($(this).data('func'));
  });

  $('#submit').on('click', function(){

    allNumber();
    console.log(fun);
    fun.forEach(function(v){
      funcall(funcs[v]);
    })
  });
});