/*对象属性（数据属性）的特性*/
//设置属性的特性（defineProperty方法设置enumerable）
var obj = {
    x: 1,
    y: 2
};
Object.defineProperty(obj, 'x', { enumerable: false }); //表示不可枚举，如果是true表示可以枚举
for (var k in obj) {
    console.log(k, obj[k]);
}
//设置属性特性实例（writable与configurable）
var person = { name: "Jack" };
Object.defineProperty(person, 'name', { enumerable: true, writable: false, configurable: false });
console.log(person.name); //jack
person.name = "Lucy"; // 不可写
console.log(person.name); //jack
delete person.name; // 不可删除
console.log(person.name); //jack

//给对象添加属性
var obj = {
    x: 1,
    y: 2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;
for (var k in obj) {
    console.log(k, obj[k]);
}
//通过defineProperty方法添加（属性特性默认为false）
var obj = {
    x: 1,
    y: 2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;
//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj, "w", { value: 456, configurable: true }); //writable,enumerable没有指定，所以默认为false
for (var k in obj) {
    console.log(k, obj[k]);
} // 没有办法输出w