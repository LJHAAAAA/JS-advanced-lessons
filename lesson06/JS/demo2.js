// &&和||的深层次的理解

console.log(2 && 4); // 4
console.log(0 && 4); //0
console.log({ x: 2 } && { name: "Jack" }); //{ name: "Jack" }
console.log(null && "hello"); // null
console.log({} && "world"); // "world"

console.log(2 || 4); // 2
console.log(0 || 4); //4
console.log({ x: 2 } || { name: "Jack" }); //{ x: 2 }
console.log(null || "hello"); // "hello"
console.log({} || "world"); //{}

console.log((new Boolean(false)) && 234); //234
console.log((new Boolean(false)) || 234); //Boolean {false}