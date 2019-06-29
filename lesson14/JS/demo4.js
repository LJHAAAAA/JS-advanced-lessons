/*Object与属性和属性特性相关的方法*/
// Object.keys() 返回所有自有（非继承）可枚举属性的键
// Object.getOwnPropertyNames()返回所有自有（非继承）键，包括不可枚举
// Object.prototype.hasOwnProperty() 判断自身（不包括继承的）是否有该属性，不包括检测可枚举的属性
// Object.prototype.propertyIsEnumerable() 判断自身是否有该属性并检测该属性是否可枚举
// in  检测一个对象是否有某个属性，包括继承的属性，包括不可枚举的属性
// for...in 遍历一个对象的属性，包括继承的属性，但不包括不可枚举的属性
var obj1 = { x: 1 };
var obj2 = Object.create(obj1);
obj2.y = 3;
Object.defineProperty(obj2, 'z', { value: 4, enumerable: true });
Object.defineProperty(obj2, 'k', { value: 4, enumerable: false });
Object.keys(obj2);
Object.getOwnPropertyNames(obj2);
obj2.hasOwnProperty("k");
obj2.propertyIsEnumerable("k");
console.log("x" in obj2, "y" in obj2, "z" in obj2, "k" in obj2);
for (var i in obj2) {
    console.log(i, obj2[i]);
}

//JS对象是否可扩展 isExtensible
var empty1 = {
    a: 1
};
console.log(Object.isExtensible(empty1)); //true
empty2 = Object.create({}, {
    "a": {
        value: 1,
        configurable: false, //不可配置
        enumerable: true, //可枚举
        writable: true //可写
    }
});
console.log(Object.isExtensible(empty2));
//preventExtensions的用法
//Object.preventExtensions 将原对象变得不可扩展,并且返回原对象.
var obj = {};
var obj2 = Object.preventExtensions(obj);
console.log(obj === obj2); //true

//新创建的对象默认是可扩展的
var empty = {};
console.log(Object.isExtensible(empty)); //true
empty.a = 1; //添加成功
Object.preventExtensions(empty);
console.log(Object.isExtensible(empty)); //false
/*使用三种方法为不可扩展对象添加属性*/
//使用传统方式为不可扩展对象添加属性
empty.b = 2; //静默失败,不抛出错误
empty["c"] = 3; //静默失败,不抛出错误

//在严格模式中,为不可扩展对象添加属性将抛出错误
(function fail() {
    "use strict";
    empty.d = "4"; //throws a TypeError
})();

//使用 Object.defineProperty方法为不可扩展对象添加新属性会抛出异常
Object.defineProperty(empty, "e", {
    value: 5
}); //抛出 TypeError 异常

//////////Object.isSealed和Object.seal实例////////
var obj = { //声明一个对象
    prop: function() {},
    foo: "bar"
};
var o = Object.seal(obj); //将 obj 密封,且返回原对象
console.log(o === obj); //true
console.log(Object.isSealed(obj)); //true

//仍然可以修改密封对象上的属性的值,但不能把密封对象的属性进行重新配置,譬如讲数据属性重定义成访问器属性.
obj.foo = "quux"; //修改成功
Object.defineProperty(obj, "foo", { get: function() { return "g"; } }); //抛出 TypeError

//任何除修改属性值以外的操作都会失败
obj.quaxxor = "the friendly duck"; //失败,属性没有成功添加，因为seal包括了不可扩展
delete obj.foo; //静默失败,属性没有删除成功
//在严格模式中,会抛出 TypeError 异常
(function fail() {
    "use strict";
    //delete obj.foo;//抛出 TypeError 异常
    //obj.sparky = "arf";//抛出 TYpeError 异常
})();
Object.defineProperty(obj, "ohai", {
    value: 17
}); //抛出 TYpeError 异常

var obj = {
    prop: function() {},
    foo: "bar"
};
//可以添加新的属性,已有的属性可以被修改或删除
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;
Object.freeze(obj); //冻结
console.log(Object.isFrozen(obj)); //true

//对冻结对象的任何操作都会失败
obj.foo = "quux"; //静默失败;
obj.quaxxor = "the friendly duck"; //静默失败
//在严格模式中会抛出 TypeError 异常
(function() {
    "use strict";
    //obj.foo = "sparky";//抛出 TypeError 异常
    //delete obj.quaxxor;//抛出 TypeError 异常
    //obj.sparky = "arf";//抛出 TypeError 异常
})();

//使用 Object.defineProperty方法同样会抛出 TypeError 异常
Object.defineProperty(obj, "ohai", { value: 17 }); //抛出 TypeError 异常
Object.defineProperty(obj, "foo", { value: "eit" }); //抛出 TypeError 异常