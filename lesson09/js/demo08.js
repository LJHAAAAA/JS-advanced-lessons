/**
 * Created by qile on 2017/8/14.
 */

// Part 111111111111111111
console.log(a);  //undefined
var a = 1;
console.log(a); //1

//上边代码等价如下 解析器眼中的代码
var a;
console.log(a);
a = 1;
console.log(a);

//思考如下代码输出什么 值类型
console.log(a,b);//输出什么 因为上面已经有a了，所以是  //1,undefined
var b = 23;
console.log(a,b);//输出什么     //1,23
var a = b;
console.log(a,b);//输出什么  //23,23

//思考如下代码输出什么 引用类型
console.log(obj1,obj2);//输出什么  //undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);//输出什么  //{x:23} undefined
var obj2 = obj1;
console.log(obj1,obj2);//输出什么  //{x:23} {x:23}
obj2.x =25;
console.log(obj1,obj2);//输出什么  //{x:25}  {x:25}


// Part 22222222222222222
foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

//上边代码等价如下 解析器眼中的代码
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//f_2


// Part 33333333333333333 见下一页PPT 同时有var和function的情况一
foo();  //报错
var foo = function(){
    console.log("foo");
};

//思考以下代码是否会报错，写出这段代码的等价形式
console.log(foo);//输出什么  undefined
var foo = function(){
    console.log("foo");
};
foo();//是否会报错  foo



// Part 444444444444444444
AA();  //AA_1
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();  //AA_2

//上边代码等价如下
function AA(){
    console.log("AA_1");
}
var AA;

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();