// IIFE实际应用案例
// example1
var tabs = document.getElementsByClassName('tabs')[0].children;
var contents = document.getElementsByClassName('show')[0];

for (var i = 0; i < tabs.length; i++) {
    // (function(i) {
    tabs[i].onclick = function() {
        for (var j = 0; j < tabs.length; j++) {
            tabs[j].className = '';
        }
        this.className = "active";
        contents.innerHTML = "导航" + i + "内容";
    };
    // })(i);
}
// 上述的代码中，注意i是共享变量，因此会先执行循环，之后执行函数内容，因此页面上显示的一直是导航4内容

// example2
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000 * i);
}
//console.log("i：",i);
for (var i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(new Date, i);
        }, 1000 * i);
    })(i);
}
//console.log("i：",i);