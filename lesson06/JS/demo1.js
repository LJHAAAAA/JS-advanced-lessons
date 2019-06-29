// &&和||的简单理解和应用

console.log(2 > 1 && 4 < 5); // true
console.log(true && (!2)); //false
console.log(false && ("2" == 2)); //false
console.log(false && false); //false

console.log(2 > 1 || 4 < 5); //true
console.log(true || (!2)); //true
console.log(false || ("2" == 2)); //true
console.log(false || false); //false