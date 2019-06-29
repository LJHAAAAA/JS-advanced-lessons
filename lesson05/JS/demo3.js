// 关系运算符
// == === != !==

console.log(3 === 3); // true
console.log(3 === "3"); //false
console.log(3 == "3"); //true
console.log(3 == new String(3)); //true
console.log(3 === new String(3)); //false

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz" === obj1); //false
console.log(obj1 == obj2); // false
console.log(obj1 === obj2); //false
console.log(obj1 == new String("xyz")); //false

var obj1 = new String("xyz");
var obj2 = obj1;
console.log("xyz" != obj1); // false
console.log(obj1 !== obj2); // false
console.log(obj1 != obj2); //false
console.log(obj1 != new String("xyz")); //true