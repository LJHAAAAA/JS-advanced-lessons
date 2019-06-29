/*日期时间的格式*/

//时间的比较和运算，内部转换为数字进行比较和运算（从1970年1月1日00:00:00开始计算）
console.log(new Date("1970-01-01").getTime());
console.log(new Date("1970-01-02").getTime());
console.log(new Date("1960-01-02").getTime());
console.log(new Date("1970-01-02") > new Date("1970-01-01"));
console.log(new Date("1970-01-02") - new Date("1970-01-01"));
console.log(new Date((new Date("1970-01-01").getTime()) + 86400000));

//时间运算 和 时间综合练习 输出50天后是几月几号，星期几？
var today = new Date();
var newDate = new Date(today.getTime() + 24 * 3600 * 1000 * 50);
console.log(newDate);