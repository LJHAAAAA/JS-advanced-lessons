/*正则表达式简介及正则对象*/

//正则表达式的创建方式
var reg1 = /[bcf]at/gi; //字面量的方式

var reg2 = new RegExp(/[bcf]at/, "gi"); //常见形式
var reg3 = new RegExp("[bcf]at", "gi");

// g表示全局，i表示区分大小写，m表示是否换行
var regExp = /ab/i;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

var regExp = /ab/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

var regExp = /a*b/gi; //注意*和.的区别 ，参见在线分析工具 https://regexper.com或https://jex.im/regulex
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

var regExp = /a.b/gi; //注意*和.的区别 ，参见在线分析工具 https://regexper.com或https://jex.im/regulex
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

// 正则表达式的元字符 及\相关字符
// \d匹配一个数字等价于[0-9] 例如， /\d/ 或者 /[0-9]/ 匹配"B2 is the suite number."中的'2'
// \D匹配一个非数字等价于[^0-9]  例如， /\D/ 或者 /[^0-9]/ 匹配"B2 is the suite number."中的'B'
"sdafsa sdfea2s".replace(/a\ds/g, "*");
"sdafsa sdfea2s".replace(/a\Ds/g, "*"); //也将空格作为了非数字字符
//\w匹配一个单字字符（ 字母、 数字或者下划线）。 等价于[A - Za - z0 - 9 _]。例如, /\w/匹配 "apple,"中的 'a'，"$5.28,"中的 '5'和 "3D."中的 '3'。
// \W匹配一个非单字字符。 等价于[ ^ A - Za - z0 - 9 _]。例如, /\W/或者 / [ ^ A - Za - z0 - 9 _] / 匹配 "50%."中的 '%'。
"sdafsa sdfea2s".replace(/a\ws/g, "*");
"sdafsa sdfea2s".replace(/a\Ws/g, "*");
//  \s匹配一个空白字符 例如, /\s\w*/ 匹配"foo bar."中的' bar'
//  \S匹配一个非空白字符 例如, /\S\w*/ 匹配"foo bar."中的'foo'

// 正则表达式的特殊字符
//字符类 []
console.log("absxsdfe123Ab".replace(/[abd]/, "X"));
console.log("absxsdfe123Ab".replace(/[abd]/g, "X"));
console.log("absxsdfe123Ab".replace(/[abd]/gi, "X"));

// 字符类 的取反 [^]
console.log("absxsdfe123Ab".replace(/[^abd]/, "X"));
console.log("absxsdfe123Ab".replace(/[^abd]/g, "X"));
console.log("absxsdfe123Ab".replace(/[^abd]/gi, "X"));

//范围类
console.log("12345667".replace(/[3-9]/gi, "X"));
console.log("absxsdfe123Ab".replace(/[a-f1-9]/gi, "X"));
console.log("absxsdfe123Ab".replace(/[a-f][1-9]/gi, "X")); //如果单独替换，则需要分组，见后续
console.log("absxsdfe1Q2e3Ab".replace(/[a-f][1-9][A-Z]/gi, "X"));

//思考：如何匹配 -
console.log("2017-10-23".replace(/[0-9]/g, "X"));
console.log("2017-10-23".replace(/[0-9-]/g, "X"));

//关于 . 除了回车和换行符之外的所有字符
/ab[0-9][^\r\n]/ //等效于/[ab\d.]/
console.log("@abc@123@".replace(/@./g, "Q"));
console.log("@abc@123@".replace(/.@/g, "Q"));

//关于边界 ^ $ \b \B
console.log("This is a Boy is".replace(/is/g, 0));
console.log("This is a Boy is".replace(/^is/g, 0));
console.log("This is a Boy is".replace(/is$/g, 0));
console.log("This is a Boy is".replace(/is\b/g, 0)); // 空格也作为了一个边界，但是会将空格输出
console.log("This is a Boy is".replace(/is\B/g, 0));
console.log("This is a Boy is".replace(/\bis/g, 0));
console.log("This is a Boy is".replace(/\Bis/g, 0));

//量词 注意*在这里是量词，不是充当通配符，充当通配符的是 .
//? 出现0次或1次（最多出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa?/g, 0));

//+ 出现1次或多次（至少出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa+/g, 0));

//* 出现0次或多次（任意次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa*/g, 0));

//{n} 出现n次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1}/g, 0));
console.log("AaBbAb_AaaBbbAba".replace(/Aa{2}/g, 0));

//{n,m} 出现n到m次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1,2}/g, 0));

//{n,} 出现至少n次
console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,}/g, 0));
//console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,4}/g,0));

//贪婪模式和非贪婪模式
"12345678".replace(/\d{3,6}/, 'X'); //默认为贪婪模式  X78
"12345678".replace(/\d{3,6}?/, 'X'); //设置为非贪婪模式 在量词后加？X45678
"12345678".replace(/\d{3,6}?/g, 'X'); //返回什么？

//正则表达式的分组
console.log("NameNameName_11111".replace(/Name{3}/, "X"));
console.log("NameNameName_11111".replace(/(Name){3}/, "X"));

console.log("a1b2c3d4e5".replace(/[a-z]\d{3}/, "X"));
console.log("a1b2c3d4e5".replace(/([a-z]\d){3}/, "X"));
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}/, "X"));
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}?/, "X"));

// 与分组相关的 或
"abcdefghijk".replace(/abcde|fghijk/g, "X");
"abcdefghijk_abcdehijk_abcfghijk".replace(/abc(de|fg)hijk/g, "X");

//分组的 反向引用
//如何将2017-10-23转成10/23/2017
"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/, "$2/$3/$1");

//分组的 忽略分组 （？：）
"2017-10-23".replace(/(?:\d{4})-(\d{2})-(\d{2})/, "$2/$3/$1");