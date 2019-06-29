// 值类型判断值是否相同
var a = 100;
var b = 100;
console.log(a == b); //true
console.log(a === b); //true
//引用类型是判断所指向的内存空间是否相同
var c = new Number(200);
var d = new Number(200);
console.log(c == d); // c和d所指向的内存空间不相同 false
console.log(c === d); //false

var a3 = new Number(200);
var b3 = a3;
console.log(a3 == b3); // true 所指向的内存空间相同
console.log(a3 === b3); // true 都是引用类型，指向的内存空间也相同

b3 = new Number(200);
console.log(a3 === b3); // false 所指向的内存空间不相同

//值类型和引用类型综合
var a4 = new Number(200);
var b4 = 200;
console.log(a4 == b4); //true发生了类型转换，a4发生转换，如果b4发生转换，结果还是false
console.log(a4 === b4); //false 两者类型本身就不同

var a5 = { x: 1, y: 2 };
var b5 = { x: 1, y: 2 };
console.log(a5 === b5);
console.log(a5.x === a5.x); //对象属性如果是基本类型内存分配在堆区，比较时是值比较