/* 稀疏数组和多维数组 */

// 稀疏数组
var a1 = [, "abc"];
console.log(a1.length);

for (var i in a1) {
    console.log(i, a1[i]); //输出几个元素
}
console.log(0 in a1, 1 in a1); // 遍历不到的

var a2 = new Array(3);
console.log(a2.length);
console.log(a2);

//注意：
var a3 = [, , ];
console.log(a3.length);

console.log(["a", "b"].length); // 2
console.log(["a", "b", ].length); // 2
console.log(["a", "b", , ].length); // 3

// 多维数组
var table = new Array(5);
for (var i = 0; i < table.length; i++) {
    table[i] = new Array(5); //若是table[i] = new Array(i);
}

for (var row = 0; row < table.length; row++) {
    for (var col = 0; col < table[row].length; col++) {
        table[row][col] = row * col;
    }
}
var product = table[2][4];
console.log(table);