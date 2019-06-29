/*基于构造函数实现的原型继承*/
function Person(age, name) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function() {
    console.log("Hi,i'm " + this.name); // 此时的this指向的还是当前的对象即p1对象
};
var p1 = new Person(20, "Jack");
console.log(p1.name);
console.log(p1.age);
p1.sayHi();

console.log(p1.__proto__ === Person.prototype); // true

//基于构造函数实现的原型继承-属性操作
function MyObj() {}
MyObj.prototype.z = 3;
var obj = new MyObj();
obj.x = 1;
obj.y = 2;
console.log(obj.x); //1
console.log(obj.y); //2
console.log(obj.z); //3
console.log("z" in obj); //true
console.log(obj.hasOwnProperty("z")); //false
obj.z = 5;
obj.hasOwnProperty("z");
console.log(obj.z);
console.log(MyObj.prototype.z);
obj.z = 8;
console.log(obj.z);
delete obj.z; //true
console.log(obj.z);
delete obj.z; //true
console.log(obj.z); //still 3
//如何删除原型上的属性
delete obj.__proto__.z; //或者delete MyObj.prototype.z;
console.log(obj.z); //此时彻底没有z了