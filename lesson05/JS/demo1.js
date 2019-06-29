// 赋值运算符
var a = 20;
if (a = 2) { //本来想写判等符号，确写成赋值
    console.log('Yes'); //结果输出了Yes
}

// 表达式反写的原因就是为了防止将判等号写成赋值符号
if (2 = a) {
    console.log('Yes'); // error
}