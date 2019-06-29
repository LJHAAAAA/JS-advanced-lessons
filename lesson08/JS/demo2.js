// 函数的对象和属性

/* part1 对象的属性 */
// length 属性表示形参的个数，arguments.length表示实参的个数
function checkVarCount(a, b) {
    if (checkVarCount.length !== arguments.length) {
        console.log("The count of the parameters you passed into the function doesn't match the function definition.");
    } else {
        console.log("Successfully call the function");
    }
}
checkVarCount(1, 2);
checkVarCount(1);

// caller属性代表着追踪是谁调用了该函数，如果该函数.caller == null表示是window下的函数或者没有被调用
// example 1
function test() {
    if (test.caller == null) {
        console.log("test is called from the toppest level");
    } else {
        console.log("test is called from the function:");
        console.log(test.caller.toString()); // 将函数转换为字符串的形式,不加.toString()会将这个函数输出
    }
}
console.log("没有调用的情况下test.caller为：", test.caller); // null
test(); // 最高层次的调用
function testOuter() {
    test();
}
testOuter();
// example2
var obj = {
    foo1: function() {
        console.log(this.foo1.caller);
    },
    foo2: function abc() {
        this.foo1();
    }
};
obj.foo1(); // null
obj.foo2(); // foo2()函数
//callee函数 返回正在被执行的function对象，即指定的 Function 对象的正文 -->递归; callee 属性是 arguments 对象的一个成员
//该属性仅当相关函数正在执行时才可用。通常这个属性被用来递归调用匿名函数
var func = function(n) {
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1); //return n * arguments.callee(n - 1);
};
console.log(func(4));
(function func(n) {
    if (n <= 0) {
        return 1;
    } else {
        return n * arguments.callee(n - 1);
    }
})(4);

// prototype属性
function Man(name, age) {
    this.name = name;
    this.age = age;
}
Man.prototype.sex = "M";
Man.prototype.sayHi = function() {
    console.log("Hi,i'm", this.name);
};
var li = new Man("Leo", 10);
li.sayHi(); //调用原型的方法 Hi,i'm Leo
console.log(li.sex); //M
Man.prototype.isStrong = true; //原型上添加一个属性isStrong
console.log(li.isStrong); //true

/* part2：对象的方法 */
// call apply移花接木，吸星大法 call是散列传递，apply是数组传递
// bind 绑定，给函数对象绑定调用的对象实体
var x = 45;
var obj = {
    x: 23,
    test: function() {
        function foo() {
            console.log(this.x);
        }
        foo.bind(this)(); // 23 var fee = foo.bind(this); fee(); 此时的this指向的是obj对象，因此就给foo中的this绑定成obj对象调用
        foo(); // 递归调用this指向的是window 因此为45
    }
};
obj.test();

var check = function(value) {
    if (typeof value !== 'number')
        return false;
    else
        return value >= this.minimum && value <= this.maximum;
};
var range = { minimum: 10, maximum: 20 };
var bindCheck = check.bind(range); // 给check这个函数中的this绑定给了range对象，并把函数赋值给bindcheck这个函数对象
var result = bindcheck(12); //把bindcheck的结果给了result 相当于range.check(12)
console.log(result); //true

// 该绑定函数将 bind 方法中指定的参数用作第一个参数和第二个参数。在调用该绑定函数时，指定的任何参数将用作第三个、第四个参数（依此类推）
var displayArgs = function(val1, val2, val3, val4) {
    console.log(val1 + " " + val2 + " " + val3 + " " + val4);
};
var emptyObject = {};
var displayArgs2 = displayArgs.bind(emptyObject, 12, "a");
displayArgs2("b", "c"); // Output: 12 a b c