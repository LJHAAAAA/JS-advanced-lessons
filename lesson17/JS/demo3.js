/*JS继承补充部分*/

//静态方法实例与原型方法实例
var BaseClass = function() {};
BaseClass.prototype.f2 = function() {
    console.log("This is a prototype method ");
};
BaseClass.f1 = function() { //定义静态方法
    console.log("This is a static method ");
};
BaseClass.f1(); //This is a static method
var instance1 = new BaseClass();
instance1.f2(); //This is a prototype method

//constructor属性的应用
// 1 确定对象的构造函数名
function Foo() {}
var f = new Foo();
console.log(f.constructor.name);

// 2 创建相似对象
function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);
console.log(y instanceof Constr);

// 3 constructor可用于指定构造函数
function Person(area) {
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function() {
    console.log(this.area);
};
var Father = function(age) {
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor); //function person()
console.log(Father.prototype.constructor); //function person()
Father.prototype.constructor = Father; //修正constructor指向
console.log(Father.prototype.constructor); //function father()
var one = new Father(25);

//公有属性、私有属性、特权方法
function A(id) {
    this.publicId = id;
    var privateId = 456;
    this.getId = function() {
        console.log(this.publicId, privateId);
    };
}
var a = new A(123);
console.log(a.publicId);
// console.log(a.privateId);
a.getId();