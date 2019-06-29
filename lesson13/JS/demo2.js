/*JS对象的属性*/
var o = {
    _x: 1.0, //不成文的规定一般约定_x表示这个属性是私有属性
    get x() {
        return this._x; //如果都写成x会怎样//get x(){return this.x;},会循环递归的调用
    },
    set x(val) {
        this._x = val;
    }
};
console.log(o.x); //调用get x()方法，返回_x的值
o.x = 2; // 为对象添加一个x属性，同时调用set x()方法，设置_x的值为2
console.log(o.x, o._x); //由于get x()方法的优先级要高于x所以连个返回的都是this._x的值
// 变形
var o = {
    x: 1.0,
    get x() {
        return this._x;
    },
    set x(val) {
        this._x = val;
    }
};
console.log(o.x); //undefined 调用的是get x()方法，因此没有_x属性，因此返回的是undefined
o.x = 2; // 为对象x属性重新赋值，同时调用set x()方法，设置_x的值为2
console.log(o.x, o._x); //2 2
//只读模式
var o = {
    _x: 1.0,
    get x() {
        return this._x;
    }
};
console.log(o.x); //1
o.x = 2; // 添加属性
console.log(o.x, o._x); //1 1

/*访问器属性 实例*/
var p1 = {
    _name: "Jack",
    _age: 23,
    set age(val) {
        if (val > 0 && val < 150) {
            this._age = val;
        } else {
            console.log("请设置正常年龄");
        }
    },
    get age() {
        return this._age;
    }
};
p1.age = 178;
console.log(p1.age);