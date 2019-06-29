// JS语法、表达式及语句综述

// 通过字面量的方式创建对象
var a = { x: 1, y: 7 };
var arr = [1, 2, 3, 4];

// 在进行变量命名时不能使用保留字，例如 arguments、break、case、catch、class、const
// arguments 用法：arguments是一个对应于传递给函数的参数的类数组对象
function f(a) {
    console.log(a); // 1
    console.log(arguments); // Arguments(3) 是一个类对象数组，将传入的所有参数保存在一个数组中
    console.log(arguments[0]); // 1
    console.log(arguments[1]); // 2
    console.log(arguments[2]); // 3
}
f(1, 2, 3);

// JavaScript中的{}语句块的二义性

/* {}语句块一般包含两个含义
1. 表示语句块，由于JavaScript在ES5中没有块级作用域，因此写法是无辜的
2. 对象字面量，创建对象的时候 */
var max = function(x, y) {
    return x > y ? x : y;
}; {
    foo: max(2, 3) //{}语句块这个代码JavaScript将语句作为label语句进行解析，因此不会报错 3
}

{
    foo: max(2, 3),
    name: 'Lily' // 程序报错，原因这里产生二义性 {}，没有被认为是对象字面量，而是被认为是代码块
}

{
    console.log('JavaScript'); // {}被认为是语句块，因此照常输出 JavaScript
    foo: max(2, 3); // 3
}

// 不同的表达式
23; //其中的23为原始表达式
obj = { x: 2 }; // ={x:2}为对象初始化表达式
arr = [1, 2]; // =[1,2]为数组初始化表达式
var foo = function() { // = function(){}为函数定义表达式
    console.log("foo");
};
obj.x; //obj.x为属性访问表达式
foo(); //foo()为函数调用表达式
2 + 3; //2+3为算数运算表达式
2 > 3; //2>3为关系运算表达式
1 && 2; //1&&2为逻辑运算表达式

// ES5中没有块作用域
for (var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}
console.log(i); // 虽然i是局部变量，但是i的值，仍旧被记录下来 5

//扩展知识在chrome中测试下述代码： var a,b;  与 var a=b;   谁是局部变量，谁是全局变量？
function foo() {
    var a = b = 3; // 类似于var a; b = 3;其中a是局部变量，b是全局变量
    var a, b = 3; // a,b都是局部变量，因此所以都会报错
}
foo();
console.log("b:", b); //输出3，全局变量
console.log("a:", a); //报错，局部变量