// JS函数对象
function foo() {} //创建了一个函数对象
console.log(foo); // 输出函数的内容
console.log(typeof foo); // function
console.log(foo instanceof Object); // true
console.log(foo instanceof Function); // true
console.log(foo === window.foo); // true

console.log(typeof Function); //function
console.log(typeof Array); //function
console.log(typeof Date); //function
console.log(typeof Error); //function
console.log(typeof Math); //Object
console.log(typeof JSON); //Object

//思考：
console.log(typeof new Function()); // function
console.log(typeof new new Function()); // object
console.log(typeof new Array()); // object
console.log(typeof new Date()); // object

//练习
var Person = new Function();
Person = function(name) {
    console.log(this.name);
}
console.log(Person instanceof Function);
console.log(Person instanceof Object);
var a = new Person('jake');
console.log(a instanceof Function);
console.log(a instanceof Object);