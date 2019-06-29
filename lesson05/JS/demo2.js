// 算术运算符

// + 用于字符串的时候表示连接，用于数值的时候表示运算
console.log("1" + "2"); //"12"
console.log("1" + 2); //"12"
console.log(1 + {}); //"1[object Object]"
// 补充：当想以字符串的形式输出字符串的内容，要用到JSON.stringify()方法
var a = { x: 2, y: '2' };
JSON.stringify(a); //"{"x ":2,"y ":"2 "}"
console.log(true + true); //2
console.log("5" - 2); //3

//注意区分++i和i++运算
var x = "1";
console.log(++x); //2 注意++和--的隐式类型转换
var x = "1";
console.log(x + 1); //11
// 注意+=返回的是string类型
var a = '1';
a += 1;
console.log(a); // 11

// 注意区分JavaScript和C语言的区别
var i = 1;
var y = ++i + ++i + ++i;
console.log(y); //javascript的结果是9，而对于C语言的结果是12