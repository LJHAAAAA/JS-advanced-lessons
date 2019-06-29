// 作用域实例
var a = 10,
    b = 20;

function fn() {
    var a = 100,
        c = 200;
    //console.log(a,b,c,d); 报错由于此时的d还没有定义
    function bar() {
        //bar局部作用域
        var a = 500,
            d = 600; // 若此句该为var a = 500;b = 600;则此时的b相当于是全局变量
        console.log(a, b, c, d); // 500 20 200 600
    }
    bar();
}
fn();
//console.log(a,b,c,d); // 报错 c d此时都没有定义
// 静态此法作用域
var name = "Jack";

function echo() {
    console.log(name); // 静态词法作用域，因此name的值不会改变
}

function foo() {
    var name = "Bill";

    function fee() {
        var name = "Lucy";
        echo();
    }
    fee();
}
foo(); // Jack

// 块级作用域问题
// 变量污染、变量共享问题,尤其是异步执行的情况下。如果是两个单独的文件的情况下，更容易造成变量污染
var userId = 123;
document.onclick = function() {
    console.log("userId = ", userId);
    //alert("userId = "+userId);
};
//一长串代码后，假如看不见上述代码了
var a = 2,
    b = 3;
if (a < b) {
    var userId = 234;
}
// 解决代码
var userId = 123;
document.onclick = function() {
    console.log("userId = ", userId);
    //alert("userId = "+userId);
};
//一长串代码后，假如看不见上述代码了
(function() {
    var a = 2,
        b = 3;
    if (a < b) {
        var userId = 234;
    }
}());