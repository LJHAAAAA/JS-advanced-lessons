/**
 * Created by qile on 2017/8/14.
 */
//全局作用
var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,
        c = 200;
    console.log(a,b,c,d);  //d不存在,a,b,c依次为上文出现过的，有覆盖效果
    function bar() {
        //bar局部作用域
        var a = 500,
            d = 600;
        console.log(a,b,c,d); //500 20 200 600
    }
    bar();
}
fn();
console.log(a,b,c,d); //报错，因为c,d为局部变量，在全局无法访问


