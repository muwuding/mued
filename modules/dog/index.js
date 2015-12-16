
//生成一只狗

var dog1 = {
  color: '黄色',
  sex: '公性',
  type: '哈爬狗',
  age: 4,
  name: '安倍晋三'
}

var huang = new Dog(dog1);

console.log('huang 是 Dog 的实例？');
console.log(huang instanceof Dog);
console.log('huang 的构造函数是DOG？');
console.log(huang.constructor === Dog);
huang.say();