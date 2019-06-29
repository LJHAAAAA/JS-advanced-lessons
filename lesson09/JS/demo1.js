// JS预解析
// part1
console.log(a); // undefined
var a = 2;
console.log(a); // 2
// 解析器中的代码
var a;
console.log(a);
a = 2;
console.log(a);

// example1
console.log(a, b); //undefined undefined 
var b = 23;
console.log(a, b); //undefined 23
var a = b;
console.log(a, b); //23 23
// example2
console.log(obj1, obj2); //undefined undefined
var obj1 = { x: 23 };
console.log(obj1, obj2); //{x:23} undefined
var obj2 = obj1;
console.log(obj1, obj2); //{x:23} {x:23}
obj2.x = 25;
console.log(obj1, obj2); //{x:25} {x:25}
// example3
function foo() {
    console.log("j:", j); // undefined
    var j = 10;
    console.log("j:", j); // 10
}
foo();
console.log("j:", j); // error

// part2:函数声明提升案例
foo(); // f_2 注：ES5中函数及变量声明重复的话，相当于覆盖
function foo() {
    console.log("f_1");
}

function foo() {
    console.log("f_2");
}

// part3:同时又var 和function的情况
// 当function前有运算符的话，认定为表达式，不提升
foo();
var foo = function() {
    console.log("foo");
};
// 上述代码等价于
var foo;
foo(); // error
foo = function() {
    console.log('foo');
}

console.log(foo);
var foo = function() {
    console.log("foo");
};
foo();
// 上述代码等价于
var foo;
console.log(foo); // undefined
foo = function() {
    console.log('foo');
}
foo(); // foo

// part4:变量名同函数名

AA();

function AA() {
    console.log("AA_1");
}
var AA = function AA() {
    console.log("AA_2");
};
AA();
// 上述代码等价于
function AA() {
    console.log("AA_1");
}
var AA; // 此时的AA已经不起作用，因为已经声明了AA(),解析器对于已经声明的变量不起作用
AA(); // AA_1
AA = function AA() {
    console.log("AA_2");
};
AA(); // AA_2