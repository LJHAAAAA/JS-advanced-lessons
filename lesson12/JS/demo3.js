/* 闭包的作用和应用场景 */
var n = 10;

function f1() {
    var n = 999;
    nAdd = function() { n += 1; }; //思考：nAdd是闭包么? n是哪个作用域下的变量
    function f2() {
        console.log(n);
    }
    return f2;
}
var result = f1();
result(); // 999
nAdd();
result(); // 1000
//闭包 应用案例 实现数据的封装 私有属性
function Person() {
    var name = "default";
    return {
        getName: function() {
            return name;
        },
        setName: function(newName) {
            name = newName;
        }
    }
};
var john = Person();
console.log(john.getName());
john.setName("john");
console.log(john.getName());

var jack = Person();
console.log(jack.getName());
jack.setName("jack");
console.log(jack.getName());

//闭包的实际应用案例
// 比如说我现在的需求是这样的，在网页中有时候会需要遮罩层，调用的时候我就创建一个，
// 但是你不可能每次调用创建，所以如果存在就用以前的，如果不存在就创建新的
function fn() {
    var a;
    return function() {
        return a || (a = document.body.appendChild(document.createElement('div')));
    }
};
var f = fn();
f();

//定时与节点 闭包应用案例 2秒后执行，由于闭包所以objID此时还存在
//虽然有时没有直接用，但闭包无时无刻不存在
function closureExample(objID, text, timedelay) {
    setTimeout(function() { // settimeout实际上实现了一个闭包
        //document.getElementById(objID).innerHTML = text;
        console.log(objID, text);
    }, timedelay);
} // 由于函数是立即执行的，因此内存不可能直接释放掉相应的变量
closureExample("myDiv", "Closure is Create", 2000);

//闭包 应用案例
var db = (function() {
    // 创建一个隐藏的object, 这个object持有一些数据
    // 从外部是不能访问这个object的
    var data = {};
    // 创建一个函数, 这个函数提供一些访问data的数据的方法
    return function(key, val) {
        if (val === undefined) { return data[key] } // get
        else { return data[key] = val } // set
    };
    // 我们可以调用这个匿名方法
    // 返回这个内部函数，它形成了一个闭包
})();

db('x'); // 返回 undefined
db('x', 1); // 设置data['x']为1
db('x'); // 返回 1
// 我们不能直接访问data这个object本身
// 但是我们可以设置它的成员


//////////////其他实例///////
(function() {
    var m = 0;

    function getM() {
        return m;
    }

    function setM(val) {
        m = val;
    }
    window.g = getM;
    window.f = setM;
}());
f(100);
g();

//注意闭包与不经意的变量共享
function f() {
    var result = [];
    for (var i = 0; i < 3; i++) {
        //(function(){
        var pos = i;
        var func = function() {
            return pos; //若是return i;的话最终输出是几？
        }
        result.push(func);
        //console.log(i,pos);
        //}());
    }
    return result;
}
console.log(f()[1]()); // 输出 1？ 2？ 3？（没和没有IIFE时，返回i和pos时的区别）