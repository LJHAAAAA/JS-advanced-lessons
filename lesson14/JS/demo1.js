/*for in没有遍历到原型链上所有的属性*/
var obj1 = { x: 3 };
var obj2 = Object.create(obj1);
obj2.y = 4; //给obj2添加属性
obj2.z = 5;
console.log(obj2.x); //3
console.log(obj2.y); //4
console.log(obj2.z); //5
console.log(obj2.toString); //原型链上有toString属性
for (var k in obj2) { //通过for...in遍历所有原型链上的属性
    console.log(k, obj2[k]); //不能遍历到toString？
}