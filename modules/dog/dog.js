/*
*狗的共性特征：
*1、四只脚；2、会叫
*------
*够的不同点：
*1、颜色；2、年龄；3、性别；4、品种；5、名称
*/

function zoon() {

  this.species = '动物';
}

//创建狗对象
function Dog(obj) {

  this.color = obj.color;
  this.age = obj.age;
  this.sex = obj.sex;
  this.type = obj.type;
  this.name = obj.name;
  this.say = function() {
    console.log('我是一只' + this.color + '的' + this.sex + this.type);
    console.log('我今年' + this.age + '岁了');
    console.log('我的名字是' + this.name);
    console.log('其实我就是' + this.species);
  }
}

Dog.prototype = new zoon();