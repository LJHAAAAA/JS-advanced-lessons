/*Error对象*/

//可以直接创建Error对象
console.log(Error.prototype); //{name: "Error", message: "", constructor: function, toString: function}
var myError = new Error("NewMessage");
console.log(myError.name, myError.message);

//基于Error的子类，可以创建自定义错误对象，并添加若干自有属性
function MyError(name, message) {
    this.name = name || 'MyError';
    this.message = message || 'Default Message';
}
MyError.prototype.__proto__ = Error.prototype;
//MyError.prototype = Object.create(Error.prototype);
//MyError.prototype.constructor = MyError;

//Part1引用错误案例 ReferenceError
// var y = 23;
try {
    var x = y; // 没有定义y所以产生错误。如果有y的话，不会抛异常错误
    //console.log("x") = 23;//赋值引用错误，在chorme中测试
} catch (e) {
    console.log(e.name, e.message);
} finally {
    console.log("finally"); //有无异常该句都会执行
}

//Part2范围错误 RangeError
try {
    var a = new Array(-1);
    //var a= new Array(1);
} catch (e) {
    console.log(e.name, e.message);
} finally {
    console.log("finally"); //有无异常该句都会执行
}

//Part3类型错误 TypeError
try {
    var a;
    a.aa();
    //var a= new 123; //在chrome中测试
} catch (e) {
    console.log(e.name, e.message);
} finally {
    console.log("finally"); //有无异常该句都会执行
}