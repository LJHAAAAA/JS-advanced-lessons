// 实参数量大于形参的情况
function test() {
    // arguments 是一个类数组对象，不是数组
    console.log(arguments); // 展示一个类数组对象
    //console.log(test.arguments==arguments,arguments);  ?
    // console.log(arguments.length);   访问的是元素的数量
    // console.log(typeof arguments);
    // console.log(arguments instanceof Array);  // false
    // console.log(arguments instanceof Object); 
    console.log(Array.prototype.slice.call(arguments)); // 将arguments转换成一个数组
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!"); //"hello,world!"
// ps
var array = [1, 2, 3, 4, 5]; // 给数组加一个属性，得到的依旧是一个数组
array.x = 6;
array instanceof Array; // true [1,2,3,4,5,x:6];