// &&和||在实际中的应用

// 实现if else语句 转化为模型((条件&&执行结果)||(条件&&执行结果))
var score = 90;
console.log((score >= 90 && "优") || (score >= 80 && "好") || (score >= 70 && "良") || (score >= 60 && "及格") || "不及格");

// 实现函数默认的参数值
var sum = function(a, b, c) {
    b = b || 4;
    c = c || 5;
    return a + b + c;
};
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2)); // 8
console.log(sum(1)); // 10
console.log(sum(1, 0, 0)); //10 程序的不足之处
/* 改进的版本 */
var sum = function(a, b, c) {
    (b != false && (b = b || 4)); //if(b!=false){b = b||4;}
    (c != false && (c = c || 5)); // if(c!=false){c = c||5;}
    return a + b + c;
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2)); // 8
console.log(sum(1)); // 10
console.log(sum(1, 0, 0)); //1