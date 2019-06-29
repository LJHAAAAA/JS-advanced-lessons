/* 闭包的概念 */

// 引入实例
/* example1 */
function f1() {
    var x = 1;

    function f2() {
        return x++;
    }
    return f2();
}
var f3 = f1();
//观察f1中的x变量
console.log(f3); //输出1
console.log(f3); //输出1
/* example2 */
function f1() {
    var x = 1;

    function f2() {
        return x++;
    }
    return f2;
}
var f3 = f1();
//观察f1中的x变量
console.log(f3()); //输出1
console.log(f3()); //输出2

// 闭包的概念
function createInc(startValue) {
    return function(step) {
        startValue += step;
        return startValue;
    }
}
var inc = createInc(5);
console.log(inc(1)); //6
console.log(inc(2)); //8
inc = createInc(5);
console.log(inc(1)); //6

function createInc(startValue) {
    return function(step) {
        startValue += step;
        return startValue;
    }
}
var inc = createInc(5);
console.log(inc(1)); //6
console.log(inc(2)); //8
var inc2 = createInc(5);
console.log(inc(1)); //9
console.log(inc2(1)); //6

/* 任何一个函数都会与其相应的作用域会涉及到闭包 */
function foo() {
    var i = 0;

    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a(); //1
a(); //2
b(); //1