// 值传递
var a = 1;

function foo(x) {
    console.log("a:", a, " x:", x); // 1 1
    x = 2; // x重新赋值为 2
    console.log("a:", a, " x:", x); // 1 2
}
console.log("a:", a); // 输出结果 1
foo(a); // x =a 
console.log("a:", a); // 1 值传递不改变结果

//引用传递
var obj = { x: 1 };

function fee(o) {
    console.log("obj.x :", obj.x, " o.x :", o.x); // 1 1
    o.x = 3; // 通过o引用改变对象中x的值
    console.log("obj.x :", obj.x, " o.x :", o.x); // 3 3
}
console.log("obj.x :", obj.x); // 1
fee(obj); // 调用函数，o也指向对象{ x: 1 }
console.log("obj.x :", obj.x); //3