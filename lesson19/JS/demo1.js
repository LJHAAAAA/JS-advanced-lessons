/*创建Date对象*/
//创建对象的方式

var date1 = new Date(2017, 9, 18, 12, 34, 1); //注意：月0-11，日：1-31，时：0-23，分：0-59，秒：0-59，毫秒：0-999
console.log(date1);

var date2 = new Date(17, 9, 18, 12, 34, 1); //若years为2位的话自动加1900
console.log(date2);

var date3 = new Date("2017-08-09"); //注意日期的格式 此处的08代表8月还是9月，对比上一个创建形式8月 传多少就是多少
console.log(date3);

//var date4 = new Date(0);    //1970-01-01:00:00:00
var date4 = new Date(1000); //1970-01-01:00:00:01 以毫秒为运算单位
console.log(date4); //逆运算是date4.getTime();

var date5 = new Date(); //new Date(Date.now());
console.log(date5);

//补充说明 无效的如期
var date6 = new Date(NaN);
console.log(date6); //Invalid Date

//有无new的区别
var d1 = new Date();
var d2 = Date();
console.log(d1, typeof d1); //object
console.log(d2, typeof d2); //string