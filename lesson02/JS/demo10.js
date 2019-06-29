// 隐式类型转换
var a = 1;
var b = 2;
console.log(a > b, typeof(a > b)); // false boolean

var c = 3 + '2'; //32 3->'3'
var d = '3' - 2 //1 '3'->3

var e = !!a;
console.log(typeof e); // boolean