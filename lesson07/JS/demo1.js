// 函数的定义方式（三种）
// 第一种：通过函数的声明的方式进行定义
function max(a, b) {
    return a > b ? a : b;
};
max(2, 3) // 3
    // 第二种：函数表达式的形式来表现
var max = function(a, b) {
    return a > b ? a : b;
};
max(2, 3); // 3
// 匿名函数在栈追踪中不会显示有意义的函数名，使得调试起来很困难
var foo = function(a, b) {
    console.trace(); // 追踪为foo，调试困难
    return console.log(a > b ? a : b);
};
foo(2, 3);

foo = function(a, b) {
    console.trace(); // 追踪为foo，调试困难
    return console.log(a > b ? b : a);
};
foo(2, 3);

// 第三种：使用new Function()构造函数的方法
var max = new Function('a', 'b', 'return a>b?a:b'); // 函数参数和函数体
max(2, 3); // 3
console.log(Function instanceof Function); //true
console.log(Function instanceof Object); // true