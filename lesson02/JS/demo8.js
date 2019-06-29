// 包装对象
// 对于包装对象来说，属性不能发生改变
var str = 'abc';
console.log(str.length); // 将str包装成对象，因此有了length属性
str.length = 1; // 属性并没有发生改变
console.log(str, str.length); // 结果为‘abc’ 3

var array = [1, 2, 3, 4];
console.log(array.length); // 4
array.length = 1;
console.log(array, array.length); //对于引用类型要发生改变 [1] 1