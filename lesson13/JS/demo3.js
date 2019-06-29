/* 对象创建的方式 */
var obj = {
    num: 10,
    str: "Hi",
    show: function() {
        return this.str;
    }
};
console.log(obj.num); // 10
console.log(obj.str); // Hi
console.log(obj.show()); // Hi
console.log(obj.__proto__ === Object.prototype); // true
console.log(obj.__proto__.__proto__); // null

//create静态方法
var newObj = Object.create(obj); //newObj的原型是obj
newObj.age = 23;
console.log(newObj.__proto__ === obj);
console.log(newObj.__proto__.__proto__ === Object.prototype);
console.log(newObj.__proto__.__proto__.__proto__ === null);

//构造函数的方式创建JS对象
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function() {
    console.log("hello,i'm", this.name, this.age, "years old");
};
var person1 = new Person("Mike", 21);
person1.sayName();
console.log(person1.__proto__ === Person.prototype);
console.log(Person.__proto__ === Function.prototype);
console.log(person1.__proto__.__proto__ === Object.prototype);
console.log(person1.__proto__.__proto__.__proto__ === null);

/* 对象属性的增删改查 */
var obj = {};
obj.x = 2; //直接添加属性
console.log(obj.x); //通过.访问属性
obj.x = 5; //设置属性
console.log(obj["x"]); //通过[]访问属性
delete obj.x; //删除属性
console.log(obj.x);

//访问属性的for循环练习
var obj2 = {
    id_1: 2,
    id_2: 4,
    id_3: 6,
    id_4: 8,
    id_5: 10
};
for (var i = 1; i <= 5; i++) {
    console.log(obj2['id_' + i]);
}

//思考obj3 和 obj4 内容是什么？为什么？
var obj3 = {};
for (var i = 0; i < 10; i++) {
    obj3.i = i;
}
// obj3的输出结果为对象里面有一个属性i，i的值为9。在循环里面第一次循环相当于给对象添加了一个i属性，
//属性值为0，后面的循环都是在改变i的值，因此最终循环结束，对象只有一个属性，属性值的结果为在循环里i的最后一个结果为9
var obj4 = {};
for (var i = 0; i < 10; i++) {
    obj4[i] = i;
}
/*在obj4的输出结果里面有10个属性，每一个的属性值分别是循环时的i值。在循环的每一个循环里，都为obj4添加了一个新的属性，
采用中括号的方式，所添加的属性值不是一样的。因此最终循环结束，对象有10个属性，每个属性对应一个属性值*/