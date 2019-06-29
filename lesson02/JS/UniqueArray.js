// 得到一个新的数组，然后在新的数组下进行
var a = [1, 2, 3, 2, 3, 4, 7, 1, 5, 8];

function UniqueArray(arr) {
    var narr = new Array();
    for (var i = 0; i < arr.length; i++) {
        if (narr.indexOf(arr[i]) == -1) {
            narr.push(arr[i]);
        }
    }
    narr.sort(); //对数组进行排序
    return narr;
}
UniqueArray(a);

//在原有的数组上进行操作
var a = [1, 2, 3, 2, 3, 4, 7, 1, 5, 8];

function UniqueArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1); //splice用法(index,howmany)用于插入、删除、替换数组中的元素，index规定从何处添加删除元素（下标），
                //howmany规定从应该删除对少元素，必须是数字
            }
        }
    }
    arr.sort();
    return arr;
}
UniqueArray(a);