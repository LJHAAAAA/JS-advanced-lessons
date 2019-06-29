// 函数调用的方式
// 第一种：直接调用
function max() {
    //'use strict' // undefined
    return this;
}
max(); // window

/* 嵌套调用的情况 */
function test() {
    function test1() {
        console.log(this); // ?return this 为什么返回的是undefined 因为调用test() 没有返回值
    }
    test1();
}
test();

// 第二种：作为对象的方法使用
var x = 45;
var test = function() {
    console.log(this.x);
}
var obj = { x: 23 };
obj.test = test;
obj.test(); // 此时的this指代的是当前对象，因此返回的是23
test(); // test是window下的方法，因此返回的是45
// 对象的方法是嵌套定义的
var x = 45;
var obj = {
    x: 23,
    test: function() {
        function foo() {
            console.log(this.x);
        }
        foo();
    }
};
obj.test(); // 此时的this指代的是window，因此返回的是45

var fun1 = function() {
    return function fun2() {
        return this.x; //若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
/* fun3是一个函数，就是fun1
    function() {
    return function fun2() {
        return this.x; //若改为 return this;
    }
    fun4是fun1的返回结果
    function fun2() {
        return this.x; //若改为 return this;
    }
*/
console.log(obj.fun3()); //  fun3() 是fun1的返回结果
console.log(obj.fun3()()); // fun3()() 是this.x this是嵌套函数，指代的是window对象，因此为45
console.log(obj.fun4()); // fun4() 是this.x this指代的是obj对象，因此为23

// 方法三：通过call() apply()方法
var obj1 = { name: 'obj1' };
var obj2 = { name: 'obj2' };
obj1.foo = function() {
    console.log(this.name);
}
obj1.foo();
obj1.foo.call(obj2);
obj1.foo.apply(obj2);
// call apply 综合应用
var fish = {
    name: "fish",
    swim: function(m, n) {
        console.log("i'm " + this.name + " i cam swim ___", m, n);
    }
};
var bird = {
    name: "polly",
    fly: function(m, n) {
        console.log("i'm:" + this.name + " i can fly ___", m, n);
    }
};
var me = {
    name: "ABC"
};

bird.fly(5, 6);
fish.swim.call(me, 3, 4); // call在参数传递的时候是散列的传递
bird.fly.apply(me, [7, 8]); // apply在参数传递的时候是数组的形式传递
var name = 11;
bird.fly.apply(null, [7, 8]); // null 指向的是全局主体，就是全局下进行bird.fly方法的调用