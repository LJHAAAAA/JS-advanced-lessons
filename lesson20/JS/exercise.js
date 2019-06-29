/*给定这样一个连字符串，var s1 = "dgfhfgh254bhku289fgdhdy675gfh";
写一个function提取上述字符串中的字符最终输出：[254, 289, 675] */

function fun(str) {
    var reg = /\d{3}/g;
    return str.match(reg);
}
fun("dgfhfgh254bhku289fgdhdy675gfh");

/*给定这样一个连字符串，var s2 = "get-element-by-id";
写一个function转换为驼峰命名法形式的字符串输出：getElementById*/
function fun(str) {
    var reg = /-/;
    str = str.split(reg);
    for (var i = 1; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join('');
}
fun("get-element-by-id");

/*写出正则表达式，从一个字符串中提取链接地址。
如var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
写一个function从s3中提取出网址，输出数组：["www.baidu.com","www.edu2act.cn"]*/
function fun(str) {
    var reg = /\//;
    str = str.split(reg);
    reg = /w{3}.+$/g;
    var arr = [];
    for (var i = 0, j = 0; i < str.length; i++) {
        if (reg.test(str[i]) == true) {
            arr[j] = str[i];
            j++;
        }
    }
    return arr;
}
fun("测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则");