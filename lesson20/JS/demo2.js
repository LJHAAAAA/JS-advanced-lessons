/*RegExp及String相关的正则方法 */
// 属性
var reg1 = /\w/;
var reg2 = /\w/gi;
console.log(reg1.global, reg1.ignoreCase, reg1.multiline, reg1.lastIndex, reg1.source);
console.log(reg2.global, reg2.ignoreCase, reg2.multiline, reg2.lastIndex, reg2.source);

var reg3 = /\w/gi;
var str = "slfls3r3sfsf";
var returnArray1 = reg3.exec(str);
console.log(reg3.lastIndex, returnArray1); // 如果不是全局的，那么lastindex没有任何作用，都是从0开始的
var returnArray2 = reg3.exec(str);
console.log(reg3.lastIndex, returnArray2);

// 原型方法
var regExp = /a/gi; //思考如果加了g，循环了若干次后是true还是false，这是为什么？test中的lastIndex
console.log(regExp.test("ab")); //true
console.log(regExp.test("ab")); //false 为什么？
console.log(regExp.test("ab")); //true
console.log(regExp.test("ab")); //false 为什么？

var execExp = /\d{1,2}(\d)(\d)/;
var retExp = execExp.exec("12s342dsfsf233s");
console.log(retExp instanceof Array, retExp, execExp.lastIndex);
console.log(retExp instanceof Array, retExp, execExp.lastIndex);

// 与字符串相关的方法
//String.prototype.search 注意search忽略 全局g
console.log("a1b2c3d4".search(/1/)); //返回index 1
console.log("a1b2c3d4".search(/f/)); //返回index -1 没找到
console.log("a1b2c3d4".search(/\d/g)); //返回index 1 忽略全局
console.log("a1b2c3d4".search(/\d\w/g)); //返回index 1 忽略全局

//String.prototype.match 如果匹配不到返回null 匹配到了返回数组
// 包含的信息有index 原始字符串 有没有g影响很大
console.log("a1b2c3d4".match(/1/)); //[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4".match(/f/)); //null
console.log("a1b2c3d4".match(/\d/)); //[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4".match(/\d/g)); //[ '1', '2', '3', '4' ]

// String.prototype.replace
console.log("a,b,c,d".replace(",", "X"));
console.log("a2b3c4d".replace(/[2-3]/, "X"));
console.log("a2b3c4d".replace(/[2-3]/g, "X"));

//String.prototype.split
console.log("a,b,c,d".split(","));
console.log("a2b3c4d".split(/\d/));