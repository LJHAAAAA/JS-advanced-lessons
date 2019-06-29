// 静态词法作用域
var name = "Jack";

function echo() {
    console.log(name); // 此时的name指向了Jack之后不会再改变
}

function foo() {
    var name = "Bill";
    echo();
}
foo(); //Jack

//全局变量与局部变量
//example1
var x = "outside f1";
var f1 = function() {
    console.log(x);
};
f1(); // outside f1
console.log(x); //  outside f1
//example2
var x = "outside f1";
var f1 = function() {
    var x = "inside f1";
    console.log(x);
};
f1(); // inside f1
console.log(x); //  outside f1
//example3
var f2 = function() {
    var y = "局部";
    console.log(y);
};
f2(); // '局部'
console.log(y); //报错
//example4
var f2 = function() {
    y = "全局";
    console.log(y);
};
f2(); // "全局"
console.log(y); //"全局"

// 声明前置与作用域的关系
if (true) {
    var i = 0;
}
console.log(i);
// 等价于
var i;
if (true) {
    i = 0;
}
console.log(i); //ES5 中没有块级作用域 0