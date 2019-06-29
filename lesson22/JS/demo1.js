/* JS事件和JS事件对象 */
/*
// JS事件
window.onload = function() {
        console.log("window onload");
        var div2 = document.getElementById("div2");
        //思考：将下述7到11行代码写在window.onload回调函数外会怎样 报错error
        div2.onclick = function() {
            console.log("div2 click");
        }
        div2.onmouseover = function() {
            console.log("div2 mouseover");
        }
    }
    // div2.onmouseover = function() {
    //     console.log("div2 mouseover");
    // }
*/

window.onload = function(e) {
    console.log("window onload");
    console.log("e:", e);
    console.log(e.target); //document 
    console.log(this) // 此时是window
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function(e) {
        // 测试0
        // console.log(e.type); //说明这是事件是一个什么事件，click事件
        // console.log(e.target, this); //思考target和this此时是否一样？
        //所有情况都一样么?有没有某种情况不一样呢？后边讲事件流时再告诉你

        //测试1
        // console.log(e);
        // console.log(e.clientX, e.clientY, e.ctrlKey); //本身定义在对象上
        // console.log(this, "-----", e.target.id);

        // 测试2
        console.log(e); //target和type属性是定义在原型链上的属性
        console.log(e.hasOwnProperty("target"));
        console.log(e.__proto__);
        console.log(e.__proto__.__proto__);
        console.log(e.__proto__.__proto__.__proto__);
        console.log(e.__proto__.__proto__.__proto__.__proto__);

        // 测试3
        // for (var k in e) {
        //     console.log(k, e[k]);
        // }
        // for (var k in e.__proto__) {
        //     console.log(k);
        // }
        // for (var k in e.__proto__.__proto__) {
        //     console.log(k);
        // }
        // for (var k in e.__proto__.__proto__.__proto__) {
        //     console.log(k);
        // }
    }
    div1.onclick = eventHandler;
    div2.onclick = eventHandler;
    // console.log(Event instanceof Function); // Event是一个构造函数
    // //自定义事件监听、事件分发
    // document.addEventListener("xx", function(e) {
    //     console.log("11");
    //     console.log(e.target)
    // });
    // document.dispatchEvent(new Event("xx"));
}