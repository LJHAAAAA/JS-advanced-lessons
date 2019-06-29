// 基本数据类型中string类型的值

// 空字符 空格字符
var a = '';
var b = ' ';

// 使用字面量创建字符串
var str = 'abc/dce/f';

// 常用的方法
var str = "abc_def_ghi_jkl_mn";
str.split("_"); //以数组的形式展示用_分隔的字符串
str.split("_", 2); // 以数组的形式，数量为2个
str.concat("_opq"); //在原有的字符串后面连接_opq,原字符串发生改变
str.substr(4, 7); // 从四号位置截取字符串截取7个字符 原字符串不发生改变
str.substring(4, 7); // 从四号位置截取字符串截取到（但不包括）第7个位置 原字符串不发生改变
str.slice(2); // 从2号开始截取到最后
str.slice(2, 5); // 从2号开始截取到5（但不包括）
str.slice(-2);
str.slice(2, -2);

// undefined和unclear的区别
var a;
alert(a); // undefined
a; // a is uncleared; error
// undefined的两种情况 一种是变量没有初始值的情况 一种是函数没有返回值的情况。
function fee() {
    //没有返回值的情况
}
var a = fee();
console.log(a); //undefined