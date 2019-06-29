/*JS对象的原型链*/
var proObj = { z: 3 };
var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;
console.log(obj.x); //1
console.log(obj.y); //2
console.log(obj.z); //3
console.log("z" in obj); //true in可以从原型链上进行查找
console.log(obj.hasOwnProperty("z")); //false hasOwnProperty不包括继承下来的属性
obj.z = 5;
console.log(obj.hasOwnProperty("z")); // true
console.log(obj.z); // 5
console.log(proObj.z); ///3
obj.z = 8;
console.log(obj.z); //8
delete obj.z; //true
console.log(obj.z); //3
delete obj.z; //true 此时会静默失败，由于此时obj本身没有z这个属性，因此将不会删除z
console.log(obj.z); //still 3
//如何删除原型上的属性
delete obj.__proto__.z; //或者delete proObj.z;
console.log(obj.z); //此时彻底没有z了