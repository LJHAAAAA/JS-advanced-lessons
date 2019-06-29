/* 闭包的常见形式 */
var tmp = 100; //注意：词法作用域,形成的闭包是否包含此行的变量tmp？ 不包含 这是全局的自由变量
function foo(x) {
    var tmp = 3; //注意：词法作用域，思考：若屏蔽此行，会输出什么？foo之外的tmp是否为闭包的一部分？
    return function(y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包 闭包包含一个函数对象以及tmp和x变量
fee(10); // 16
fee(10); // 17
fee(10); // 18

function foo(x) {
    var tmp = 3;
    return function(y) {
        x.count = x.count ? x.count + 1 : 1;
        console.log(x + y + tmp, x.count);
    }
}
var age = new Number(2);
var bar = foo(age); //和相关作用域形成了一个闭包
bar(10); //输出什么？
bar(10); //输出什么？
bar(10); //输出什么？

function counter() {
    var n = 0;
    return {
        count: function() { return ++n; },
        reset: function() { n = 0; return n; } // 复位操作
    }
}
var c = counter();
var d = counter();
console.log(c.count()); // 1
console.log(d.count()); // 1
console.log(c.reset()); // 0
console.log(c.count()); // 1
console.log(d.count()); // 2