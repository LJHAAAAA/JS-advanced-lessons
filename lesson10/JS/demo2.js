// 执行上下文
var xx = ["书桌", "书包", "铅笔盒"]; //小明家中
console.log("在家-做作业中 1 ...");

function goToStore() {
    var yy = ["文具店老板", "出售的文具"]; //文具商店中
    console.log("在文具店-买文具中  ...");

    function goToBank() {
        var zz = ["银行职员", "柜员机"]; //银行中
        console.log("在银行-取钱 ... 返回文具店");
    }
    console.log("在文具店-买文具中  ... 发现没带钱");
    goToBank();
    console.log("在文具店-买好文具  ... 返回家");
}
console.log("在家-做作业中 2 ... 发现笔没油了");
goToStore(); //笔没油了，去商店买笔
console.log("在家-继续做作业...");
// 调用栈 Call Stack
console.log("全局上下文-start");
var x = 1;

function foo() {
    console.log("foo上下文-start"); //设置断点
    var y = 2;

    function bar() {
        console.log("bar上下文-start"); //设置断点
        var z = 3;
        console.log(x + y + z);
        console.log("bar上下文-end"); //设置断点
    }
    bar();
    console.log("foo上下文-end"); //设置断点
}
foo(); //设置断点
console.log("全局上下文-end"); //设置断点

// 作用域链与执行上下文
console.log("全局上下文-start");
var x = "家中环境-";

function goToStore_A() {
    console.log("goToStore_A 上下文-start"); //设置断点
    var y = "文具店A环境-";
    goToBank_C(); //设置断点
    // goToBank_D();//设置断点
    console.log("goToStore_A 上下文-end"); //设置断点
}

function goToStore_B() {
    console.log("goToStore_B 上下文-start"); //设置断点
    var y = "文具店B环境-";
    goToBank_C(); //设置断点
    // goToBank_D();//设置断点
    console.log("goToStore_B 上下文-end"); //设置断点
}

function goToBank_C() {
    console.log("goToBank_C 上下文-start"); //设置断点
    var z = "银行C环境-";
    //console.log(x+y+z);
    console.log("goToBank_C 上下文-end"); //设置断点
}

function goToBank_D() {
    console.log("goToBank_D 上下文-start"); //设置断点
    var z = "银行D环境-";
    //console.log(x+y+z);
    console.log("goToBank_D 上下文-end"); //设置断点
}
goToStore_A(); //设置断点
// goToStore_B();//设置断点
console.log("全局上下文-end"); //设置断点