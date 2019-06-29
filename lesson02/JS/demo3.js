//基本（原始）数据类型与引用（对象）类型的区别 赋值方式不同
//赋值
var str1 = 'a';
var str2 = str1;
str2 = 'b';
console.log(str1, str2); // a b

//赋引用
var obj1 = { v: 12 }; // obj1存放的是引用，引用指向堆区的{v: 12}
var obj2 = obj1; // obj2存放的也是引用，引用指向堆区的{v: 12}
obj2.v = 13; // 通过obj2改变堆区中v值改为13.
console.log(obj1, obj2); // 输出的都是堆区中的内容
obj2 = { v: 14 }; // obj2存放的是引用，只不过此时由堆区中的{v: 12}变为了指向{ v: 14 }，另一个对象
console.log(obj_a, obj_b); // 输出的结果是两个引用指向的不同堆区的内容