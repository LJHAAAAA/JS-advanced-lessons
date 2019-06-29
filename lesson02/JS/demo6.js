// 基本数据类型的值 Number类型
var a1 = 20;
var a2 = 23.4;
console.log(parseInt(a2)); //如果是非数字，则先转换为字符串，然后在转成整型
console.log(parseInt('23.4a')) // 结果为23 
console.log(parseFloat("23.456xy")); //同上，结果为23.456
//注意：parseInt和parseFloat都为全局方法，即window全局对象的方法
console.log(parseInt === window.parseInt);
console.log(parseFloat === window.parseFloat);

console.log(Math.ceil(a2)); //向上舍入
console.log(Math.floor(a2)); // 向下舍入
console.log(Math.round(a2)); // 标准的四舍五入
a3 = 5e2; //指数形式 5X102
console.log(a3); //500
console.log(typeof Math); //输出是 object

//NaN
var x = Number("xis021"); //试着转成Number类型
console.log(x); //NaN
isNaN(x); //如果x是NaN，则返回true，如果不是NaN，则返回false
typeof NaN; // Number

console.log(Math.log(-1)); //NaN log(e) 函数的自变量中的e必须>0
console.log(Math.acos(2)); //NaN acos(e)  函数的自变量范围在-1 到 + 1 之间。如果 e的范围超出 1.0 函数溢出得NaN
console.log(NaN == NaN); //false本身NaN的值是不同的

//Infinity与-Infinity
var y1 = 2 / 0;
console.log(y1); //Infinity
var y2 = -2 / 0;
console.log(y2); //-Infinity
isFinite(y2); //false，非有限数
isFinite(23); //true，有限数

//0与-0
var z1 = 1 / Infinity;
console.log(z1); //0
var z2 = -1 / Infinity;
console.log(z2); //-0