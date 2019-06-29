/*数组的创建和基本操作*/

// 创建数组的不同的方式
var arr1 = [1, 2, 3, "4"];
var arr2 = new Array(5);
var arr3 = new Array("5");
var arr4 = new Array(1, 2, 3, 4);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
// 经典案例一
var arr = [];
for (var i = 0; i < 5; i++) {
    document.onclick = function() {
        arr[i] = i;
    }
}
// onclick之后
console.log(arr);
// 经典案例二：数据类型
var a1 = [1, 2, 3];
var a2 = a1;
a2.length = 0;
console.log(a1, a2);

var a3 = [1, 2, 3];
var a4 = a3;
a4 = [];
console.log(a3, a4);

//增删改查
var a = ["hello"];
a[1] = 3.14; //增：直接添加数组元素，通过方法添加元素参见后续章节
a[2] = "world";
console.log("删除a[2]前的数组a", a);
delete a[2]; //删：此时数组长度还是3。如何彻底删除？直接修改length与pop方法
console.log("删除a[2]后的数组a", a);
a[0] = "XX"; //改：修改数组元素a[0]
console.log(a[0]); //查:看数组中的元素，索引从0开始

// 数组和对象的区别
var a = [];
a[-1.23] = true; //创建一个名为“-1,23”的属性
a[1.23] = 'hello'; // 转换为属性
a["100"] = 0; // 数组的第101个元素
a[1.00] = "Hi"; //和a[1]相当
console.log(a.length);
console.log(a);