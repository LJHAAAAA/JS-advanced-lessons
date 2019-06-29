// switch case详解

//  case在比较时使用的是全等操作符比较,因此不会发生隐式类型转换
var i = '1';
switch (i) {
    case 1:
        console.log('1 Number');
        break;
        // case '1':
        //     console.log('"1" Number');
        //     break;
    default:
        console.log('default');
}

//思考：下边的例子输出什么，考到了switch比较的知识和数据类型中的重点知识
// var j = 23; case_111
// var j = "23"; case_222
// var j = new String("23"); case_default
var j = new Number(23); // case_default
switch (j) {
    case 23:
        console.log("case_111");
        break;
    case "23":
        console.log("case_222");
        break;
    case new Number(23):
        console.log("case_333");
        break;
    default:
        console.log("case_default");
}

var i = 65;
switch (new Boolean(true)) { // switch()里面是一个对象，引用类型 所以输出default
    case i >= 60:
        alert('及格');
        break;
    case i < 60:
        alert('不及格');
        break;
    default:
        alert('default');
}

// switch的穿透性
var i = 3; //i=2、3、4 输出结果为case 3 case 4 default
switch (i) {
    case 1:
        console.log("case 1");
    case 2:
        console.log("case 2");
        break;
    case 3:
        console.log("case 3");
        //break;
    case 4:
        console.log("case 4");
    default:
        console.log("default");
}

//for..in 常用来遍历对象
var a = {
    x: 20,
    y: '30',
    z: 40
}
for (var i in a) {
    console.log(i); // 输出属性名 typeof(i)为string类型
    console.log(a[i]); // 输出属性值 
}