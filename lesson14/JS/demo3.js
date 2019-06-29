/*JS对象访问器属性特性*/
//添加访问器
var obj1 = {
    _name: "Lucy"
};
Object.defineProperty(obj1, "name", {
    get: function() { //只定义了get 特性，因此只能读不能写
        return this._name;
    }
});
console.log(obj1.name); //"Lucy"
obj1.name = "jack"; //只定义了getter访问器，因此写入失效
console.log(obj1.name); //"Lucy"

//综合实例
var obj2 = {
    _name: "Lucy",
    set name(val) { this._name = val; },
    get name() { return this._name; }
};
Object.defineProperty(obj2, "name", {
    get: function() {
        return this._name + "_hihi";
    },
    set: function(val) {
        this._name = val + "_haha";
    }
});
console.log(obj2.name);
obj2.name = "jack";
console.log(obj2.name);
// 属性特性描述符
var obj = { x: 5 };
Object.defineProperty(obj, "y", {
    configurable: false,
    writable: false,
    enumerable: true,
    value: 6
});
Object.defineProperty(obj, "z", {
    configurable: false,
    value: 7
});
Object.getOwnPropertyDescriptor(obj, "x");
//Object.getOwnPropertyDescriptor(obj,"y");
//Object.getOwnPropertyDescriptor(obj,"z");

// 给多个属性设置特性的方法（Object.defineProperties）
//Object.create的第二个参数类似于Object.defineProperties的第二个参数，可以添加多个属性。
var obj1 = { x: 3 };
var obj2 = Object.create(obj1, { y: { value: 3, enumerable: true } });
for (var i in obj2) {
    console.log(i, obj2[i]);
}

var obj = { _x: 1 };
Object.defineProperties(obj, {
    y: { value: 2, writable: true, configurable: true, enumerable: true },
    z: { value: 2, writable: true, configurable: true, enumerable: true },
    x: {
        get: function() { return this._x; },
        set: function(val) {
            this._x = val;
        }
    }
});