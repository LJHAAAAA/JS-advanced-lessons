/* 原型共享问题 */
//通过Object.create静态方法创建的对象的原型共享问题
var superObj = {
    x: 1,
    y: 2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5; //若此行写为subObj_First.x = 5;结果又是如何？
console.log(subObj_Second.x);

//通过构造函数创建的对象的原型共享问题
function Person(name) {
    this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function() { console.log(this.name); };

function Student(id) {
    this.id = id;
}
//var p1 = new Person("Mike");Student.prototype = p1;
Student.prototype = new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);

//测试如下代码，思考为什么，这样的继承有什么弊端
console.log(s1.name, s1.age, s1.id);
console.log(s2.name, s2.age, s2.id);
s1.__proto__.name = "Jack";
console.log(s2.name);
s2.__proto__.__proto__.age = 99;
console.log(s2.age);