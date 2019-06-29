//1、typeof的使用方法：
//原始的数据类型中注意typeof null是object，这个是一个well-known bug
console.log(typeof 123); //number
console.log(typeof '123'); //string
console.log(typeof false); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object
//引用数据类型typeof是包括两种类型 function object
console.log(typeof
    function foo() {}); //function
var a = {
    name: 'Lily',
    age: 18,
}
console.log(typeof a); //object
console.log(typeof [1, 2, 3]); //obiect
console.log(typeof Array); //function Array()方法
console.log(typeof Function); //function
console.log(typeof Date); //function
console.log(typeof Number); //String、Boolean 这里有Number() String() Boolean()方法 function
console.log(typeof Math); //定义Math对象时不用Math()方法，因此这里是 Object
console.log(typeof JSON); //object
//2、instanceof的使用方法：
//类型检测 instanceof （左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true）
var dog = { name: 'Lily', age: 18, };
console.log(dog instanceof Object); //true 此时的Object必须要大写
var b = [1, 2, 3];
console.log(b instanceof Object); //true
console.log(b instanceof Array); //true
var Person = function() {
    //...
}
var c = new Person();
console.log(typeof Person); //function
console.log(c instanceof Person); //true;
console.log(c instanceof Object); //true