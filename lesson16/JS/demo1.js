/* 一般函数下的this */

// 非严格模式下 this指向window
function thisTest() {
    console.log(this === window);
}
thisTest();
// 可以通过this给window对象添加属性和方法
var a = 10;
b = "Hi";

function thisTest2() {
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a, c);

//严格模式下 this指向的是undefined
function thisTest() {
    "use strict"
    console.log(this);
}
thisTest();
// 可以通过this来判断是处在严格模式下还是非严格模式下
//"use strict"
function isStrictMode() {
    return this == undefined ? true : false;
}
isStrictMode();

/*对象方法中的this*/
// 无嵌套的情况
var point = {
    x: 0,
    y: 0,
    moveTo: function(x, y) {
        this.x = x;
        this.y = y;
    }
};
point.moveTo(1, 1); //this绑定到当前对象，即point对象上
console.log(point);
// 有嵌套的情况
var point = {
    x: 0,
    y: 0,
    moveTo: function(x, y) {
        function moveToX(x) {
            this.x = x;
        };

        function moveToY(y) {
            this.y = y;
        }
        moveToX(x);
        moveToY(y);
    }
};
point.moveTo(1, 1); //当有嵌套的情况时，this指代的是window对象

/* 构造函数中的this */
function Point(x, y) {
    this.x = x;
    this.y = y;
}
var p = new Point(2, 3);
console.log(p); // 此时构造函数中的this就替换成了p对象

/*间接调用中的this（call、apply）*/
var bird = {
    name: "polly",
    fly: function(m, n) {
        console.log("i'm:" + this.name + " i can fly ___", m, n);
    }
};

var me = {
    name: "QL"
};
bird.fly(5, 6);
bird.fly.call(me, 7, 8);
bird.fly.apply(me, [7, 8]);