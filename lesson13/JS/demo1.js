/*创建对象*/
var man = {
    name: 'frewen',
    age: 20,
    hobby: ['playing ping pang', 'dancing'],
    decribe: function() {
        console.log(this.name + '\'s age is ' + this.age + '.And his hobby are ' + this.hobby[0] + ' and ' + this.hobby[1] + '.')
    }
}
man.decribe(); //frewen's age is 20.And his hobby are playing ping pang and dancing.

/*JS对象分类*/
// typeof
console.log(typeof Array); // function
console.log(typeof Function); // function
console.log(typeof Date); // function
console.log(typeof Number); // function
console.log(typeof String); // function
console.log(typeof Boolean); // function
console.log(typeof Math); //object
console.log(typeof JSON); //object

//instanceof
console.log(Object instanceof Function); // true
console.log(Object instanceof Object); // true
console.log(Boolean instanceof Function); // true
console.log(Boolean instanceof Object); // true
console.log(String instanceof Function); // true
console.log(String instanceof Object); // true
console.log(Number instanceof Function); // true
console.log(Number instanceof Object); // true
console.log(Function instanceof Function); // true
console.log((new Function()) instanceof Function); // true 类似于Person()这就是一个new Function
console.log((new(new Function)) instanceof Function); // false 类似于var p = new Person();p是一个对象
console.log(Function instanceof Object); // true
console.log(Array instanceof Function); // true
console.log(Array instanceof Object); // true
console.log(Date instanceof Function); // true
console.log(Date instanceof Object); // true
console.log(Math instanceof Function); // false
console.log(Math instanceof Object); // true
console.log(JSON instanceof Function); // false
console.log(JSON instanceof Object); // true