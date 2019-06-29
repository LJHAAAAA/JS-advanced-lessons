// 基本（原始）数据类型与引用（对象）类型的区别2 函数参数传递方式不同

// 值传递
var str_a = "Hello World";

function fn_a(arg) {
    console.log(arg); // Hello World
    arg = "Hai";
    console.log(str_a, arg); // Hello World , Hai
};
fn_a(str_a);
console.log(str_a); // Hello World

// 引用传递（所有对引用的操作就是对原来的所指向的数据的操作）
var obj_a = { value: 1 };

function fn_(arg) {
    arg.value = 3; //通过arg改变指向的空间的改变
};
fn_a(obj_a); // 发生引用传递，相当于arg也指向了obj_a所指向的那一块堆区空间{ value: 1 }
console.log(obj_a); // 这时候obj_a是{value:3}
function fn_b(arg) {
    arg = { value: 2 }; //创建了一个新的对象，arg指向新对象
};
fn_b(obj_a); // 发生引用传递，相当于arg也指向了obj_a所指向的那一块堆区空间{ value: 3 }
console.log(obj_a); // 这时候obj_a是{value:3}