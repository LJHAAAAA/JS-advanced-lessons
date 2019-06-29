//其他类型转换为boolean类型 使用Boolean()函数
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("abc")); // true
console.log(Boolean({})); // 对于任何对象转化都是true
if (new Boolean(false)) {
    console.log("执行");
} // 结果为执行，原因是因为if() if判断会自动执行Boolean()函数，对于任何对象转化都是true

//其他类型转化为number类型
console.log(Number(undefined)); // NaN alerting
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("")); //0
console.log(Number("abc")); // NaN
console.log(Number("123.345xx")); //NaN
console.log(Number("32343,345xx")); //NaN
console.log(Number({ x: 1, y: 2 })); //NaN

console.log(parseFloat("123.345xx")); // 123.345
console.log(parseFloat("32343,345xx")); // 32343
console.log(parseInt("123.345xx")); //123
console.log(parseInt("32343,345xx")); //32343

//其他类型转换为string类型
console.log(String(undefined)); //undefined
console.log(String(null)); // null
console.log(String(true)); // true
console.log(String(false)); //false
console.log(String(0)); // 0
console.log(String(234)); // 234
console.log(String({ x: 1, y: 2 })); // [object] [Object]