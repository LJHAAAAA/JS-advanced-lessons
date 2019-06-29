// 立即执行表达式
/* 一般写法:两种的区别在于小括号的位置不同 */
(function count(arr) {
    console.log(arr.length);
}([1, 2, 3, 4]));
(function count(arr) {
    console.log(arr.length);
})([1, 2, 3, 4]);

//注意：IIFE是表达式，要注意使用分号结尾，否则可能出现错误
(function() {
    console.log("111");
})(); //没有分号的话会报错
(function() {
    console.log("222");
})();

/* 和运算符进行结合写的表达式 */
var i = function() { return 10; }(); //i为10
true && function(a, b) { return a > b ? a : b; }(5, 9); // 注意短路原则，结果是9
! function(x, y) {
    return x == y ? true : false; // === 返回true
}("5", 5); // false
! function() { return 2; }(); // false
! function() { return 0; }(); // true