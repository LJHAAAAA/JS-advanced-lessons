// 变量污染的问题
// 1. 文件内的变量污染问题
var userId = 123;
document.onclick = function() {
    console.log("userId = ", userId);
};

//一长串代码后，假如看不见上述代码了
(function() {
    var a = 2,
        b = 3;
    if (a < b) {
        var userId = 234;
    }
})();
/* 通过IIFE解决这个问题 */
// 2.文件间的变量污染问题
(function() {
    var x = 10;
    document.onclick = function() {
        alert(x);
    }
})();

// 变量共享问题
function f() {
    var getNumFuncs = []; //函数数组
    for (var i = 0; i < 10; i++) {
        getNumFuncs[i] = function() {
            return i;
        };
    }
    return getNumFuncs; //设置断点，查看变量共享问题
}
var tmp = f();
tmp[3](); //tmp[0]()...tmp[9]()都为10
// 通过立即执行表达式解决
function f() {
    var getNumFuncs = []; //函数数组
    for (var i = 0; i < 10; i++) {
        (function(j) {
            getNumFuncs[j] = function() { return j; };
        })(i);
    }
    return getNumFuncs; //设置断点，查看变量共享问题
}
var tmp = f();
tmp[3](); //输出为3，tmp[0]()...tmp[9]()都为是期望的结果
//局部变量的案例
function f() {
    var getNumFuncs = []; //函数数组
    var j;
    for (var i = 0; i < 10; i++) {
        j = i;
        getNumFuncs[i] = function() {
            return j; //如果return i;的话输出几？
        };
    }
    return getNumFuncs; //设置断点，查看变量共享问题
}
var tmp = f();
tmp[3](); //tmp[0]()...tmp[9]()都为9 类似于j是一个共享变量