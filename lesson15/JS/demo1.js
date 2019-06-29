/* JS对象回顾 */
// 三种方式创建对象 字面量 create方法 构造函数
var obj1 = { name: 'lucy', hobby: function() { console.log('she likes playing') } };
var obj2 = Object.create(obj1);
obj2.name = 'liming';
obj2.age = 13;

function Person(name) { this.name = name; }
var obj3 = new Person('wangyang');

//注意:create方法添加属性
var empty = {};
var obj2 = Object.create(empty, {
    x: { value: 1 },
    y: { value: 2, enumerable: true }
});
console.log(obj2); //返回的是自身的属性， 包括不可枚举属性， 但是会先返回可枚举属性， 之后返回不可枚举属性， 但是不可以返回继承的属性
console.log(obj2.hasOwnProperty("x"));

/*JavaScript语言继承方式*/
var obj = { num: 10 };
console.log(obj.__proto__ === Object.prototype); // true
var newObj = Object.create(obj);
var newObj2 = Object.create(obj); //多个对象同一个原型的情况
newObj.age = 23;
console.log(newObj.__proto__ === obj); // true
console.log(newObj2.__proto__ === obj); // true

// 思考
console.log(newObj.__proto__.__proto__); //Object.prototype
console.log(newObj.__proto__.__proto__.__proto__); //null