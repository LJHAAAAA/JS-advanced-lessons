// JS严格模式

// 严格模式的使用方法
"use strict" //全局使用

function f() {
    "use strict" //函数内部使用
}

// 严格模式下全局变量需要显式声明
function f() {
    // 'use strict' 会报错，不会输出a
    a = 3;
    return a;
}
console.log(f());

// 函数中的this 一般函数中的this（严格模式）为undefined，非严格下为全局变量window
function f() {
    // 'use strict' 会报错，不会输出a
    return this;
}
console.log(f()); // 非严格模式下为window 严格模式下this为undefined
/* 判断是否为严格模式,怎么判断一个函数是严格模式？ */
function isStrictMode() {
    if (this === undefined) {
        return true; // 严格模式
    } else {
        return false; // 不是严格模式
    }
}
isStrictMode();

// 严格模式下禁止删除不可改变的属性和未定义的变量
function f(str) {
    // 'use strict'
    str.length = 0;
    console.log(str.length);
}
var a = 'abc';
f(a);

// 严格模式下禁止函数参数重名
//"use strict";
function f(a, a, b) {
    return a + b;
}
f(2, 3, 4);

//严格模式下禁止删除未定义的变量
delete foo; // true
'use strict';
delete foo; //error