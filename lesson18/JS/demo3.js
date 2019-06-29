/*数组的方法和相关高阶函数*/

// 数组静态方法
// 1. Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例。
var bar = ["a", "b", "c"];
Array.from(bar); // ["a", "b", "c"]
Array.from('foo'); // ["f", "o", "o"]

// 2.Array.isArray() 用于确定传递的值是否是一个 Array。
var arr1 = [1, 3, 4];
console.log(Array.isArray(arr1)); // 判断是否是数组
arr1.x = 'xx';
console.log(Array.isArray(arr1)); // true

// 3.Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
Array.of(7); // [7]避免了new Array的错误
Array.of(1, 2, 3); // [1, 2, 3]
Array(7); // [ , , , , , , ]
Array(1, 2, 3); // [1, 2, 3]

//数组添加删除元素的原型方法 破坏性
//Array.prototype.shift
var arr2 = [1, 3, 5, 7];
var shiftElement = arr2.shift(); //返回去除的元素
console.log(shiftElement, arr2);

var newLength = arr2.unshift(1, 2); //返回新的数组长度
console.log(newLength, arr2);

var popElement = arr2.pop(); //返回pop出去的元素
console.log(popElement, arr2);

var newLength = arr2.push(77, 88); //返回新的数组长度
console.log(newLength, arr2);

//思考：如何通过push将两个数组组合成一个数组
var arr3 = ["a", "b"];
var arr4 = ["c", "d"];
Array.prototype.push.apply(arr3, arr4);
console.log(arr3);

//splice 从start开始，移除deleteCount个元素，并插入给定的元素
var arr5 = ["a", "b", "c", "d"];
var spliceElements = arr5.splice(1, 2, "x"); //返回切掉的数组
console.log(spliceElements, arr5);
//思考start若是负数则返回什么？：arr5.splice(-2,2,"x");

//排序和颠倒元素顺序 破坏性
var arr1 = [1, 2, 3];
arr1.reverse();
console.log(arr1);

var arr2 = ["banana", "apple", "pear", "orange"];
arr2.sort();
console.log(arr2);

//思考sort中的参数
var arr3 = [-1, -20, 7, 50];
arr3.sort();
console.log(arr3); //结果是否是预计结果,如何解决

//sort传递的函数对象(解决sort排序的错误)
arr3.sort(function(a, b) { return a - b; }); //对于数字类型，大于0则交换，冒泡排序
//arr3.sort(function (a,b) {return a>b;});//对于布尔类型，true则交换，冒泡排序

//合并、切分和连接 非破坏性
var arr4 = ["banana", "apple"];
var arr5 = ["pear", "orange"];
var newArray = arr4.concat(arr5);
console.log(newArray, arr4, arr5);

//Array.prototype.slice(begin?,end?)注意：不要和splice弄混了
var arr6 = [1, 2, 3, 4, 5];
var newArray = arr6.slice(2, 4);
console.log(newArray, arr6);
var newArray2 = arr6.slice(2);
console.log(newArray2, arr6);

//Array.prototype.join(separator?)
var arr7 = [3, 4, 5];
var joinReturn = arr7.join("--"); //返回了个什么类型？
console.log(joinReturn, arr7);
console.log(typeof joinReturn);
//注意：稀疏数组调用join
console.log([3, , , , , , 5].join("*"));

//值的查找 非破坏性
var arr8 = [1, 3, 5, 5, 7, 9, 5];
console.log(arr8.indexOf(5)); //输出几？
console.log(arr8.indexOf(5, 3)); //输出几？
console.log(arr8.indexOf(5, 5)); //输出几？

console.log(arr8.lastIndexOf(5)); //输出几？
console.log(arr8.lastIndexOf(5, 3)); //输出几？
console.log(arr8.lastIndexOf(5, 5)); //输出几？

//数组原型方法（迭代-非破坏性-检测方法）
var arr1 = [2, 5, 8];
arr1.forEach(function(a) {
    if (a > 3) {
        console.log(a, "大于3");
    } else {
        console.log(a, "不大于3");
    }
});
console.log(arr1);

var arr2 = [2, 5, 8]; //[2,4,6]
var returnValue = arr2.every(function(a) { //判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    //console.log(a);//打开此行，查看是否会输出8，为什么？
    return a % 2 === 0;
});
console.log(returnValue);

var arr2 = [2, 5, 8]; //[2,4,6]
var returnValue = arr2.some(function(a) { //判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    //console.log(a);//打开此行，查看输出了哪些数，为什么？
    return a % 2 === 0;
});
console.log(returnValue);

//数组原型方法（迭代-非破坏性-转换方法） 
var arr2 = [1, 3, 5, 7, 9];
var newArray = arr2.map(function(a) {
    return a * a;
});
console.log(newArray, arr2);

var arr2 = [1, 3, 5, 7, 9];
var newArray = arr2.filter(function(a) { //产生新数组，新数组的元素是返回为true的那些元素
    return (a > 2 && a < 8) ? true : false;
});
console.log(newArray, arr2);

// 数组原型方法（迭代-非破坏性-归约方法）
function printArgs(prev, cur, i) {
    console.log("prev", prev, ",cur:", cur, ",i:", i);
    return prev + cur;
}
var arr4 = ["a", "b", "c", "d"];
console.log(arr4.reduce(printArgs));
console.log(arr4.reduce(printArgs, "x"));
console.log(arr4.reduceRight(printArgs));
console.log(arr4.reduceRight(printArgs, "x"));