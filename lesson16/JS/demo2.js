/*this不存在作用域传递*/
var point = {
    x: 0,
    y: 0,
    moveTo: function(x, y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x; //this绑定到了哪里？
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y; //this绑定到了哪里？
        }
        moveToX(); //moveToX.call(this);通过间接调用来解决
        moveToY();
    }
};
point.moveTo(2, 2);
console.log(point);
//console.log(window.x,window.y);

// 解决方案一：软绑定
var point = {
    x: 0,
    y: 0,
    moveTo: function(x, y) {
        var that = this; //此时的that指向的就是当前对象
        function moveToX() {
            that.x = x; //this改为that
        }

        function moveToY() {
            that.y = y;
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2, 2);
console.log(point);
//console.log(window.x,window.y); 为什么不报错？但是console.log(x)和console.log(y)会报错

//解决方案二：通过call和apply来解决
var point = {
    x: 0,
    y: 0,
    moveTo: function(x, y) {
        function moveToX() {
            this.x = x; //this绑定到了哪里？
            function abc() {};
            abc.call(this); // 此时的this不再指向的是point对象，指向的是window对象
        }

        function moveToY() {
            this.y = y; //this绑定到了哪里？
        }
        moveToX.call(this); //->this.moveToX()->point.MoveToX() 如果将此句话放到深层则this不再指向point
        moveToY();
    }
};
point.moveTo(2, 2);
console.log(point); //2,0

//解决方案三：通过bind来解决
var point = {
    x: 0,
    y: 0,
    moveTo: function(x, y) {
        function moveToX() {
            this.x = x; //this绑定到了哪里？
        }

        function moveToY() {
            this.y = y; //this绑定到了哪里？
        }
        moveToX.bind(point)(); // 函数对象的绑定方法返回的是一个函数，可以直接调用，也可以传给一个变量
        moveToY.bind(point)();
    }
};
point.moveTo(2, 2);
console.log(point);