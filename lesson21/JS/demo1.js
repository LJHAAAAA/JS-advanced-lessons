/*JS异常处理*/
try {
    //try_statements 可能出现错误部分
    console.log("try_statements");
    throw "Some Error"; //可以抛出异常 throw new Error("ErrorMsg");
    // var a= new Array(-1);
    // throw new TypeError();// throw new ReferenceError();
} catch (e) { //catch和finally至少有一个
    //catch_statements 捕获处理异常
    console.warn("catch_statements", e);
} finally { //catch和finally至少有一个
    //finally_statements 最终处理
    console.log("finally_statements");
}

//当try语句的内容发生错误时，如果后面还有内容，此时不再执行，因为此时的主动权交到了catch手里面，try的语句不再执行
try {
    throw 'catch';
    console.log('xx');
} catch (e) {
    console.log(e);
}
//可以嵌套一个或者更多的try语句,如果内部的try语句没有catch子句，那么将会进入包围它的try语句的catch子句（外层的catch语句）
try {
    try {
        throw "ErrorMessage11";
    }
    // catch (e){
    //     //throw "ErrorMessage22"; //抛出异常后将直接跳出catch，catch内后续代码不再执行
    //     console.log("inside catch",e);
    //     //throw "ErrorMessage22";
    // }
    finally {
        console.log("finally 111");
    }
} catch (e) {
    console.log("outside catch", e);
} finally {
    console.log("finally 222");
}

//关于console
console.log("logInfo");
console.warn("warnInfo");
console.error("errorInfo");
console.assert(3 > 2, "有问题的话会输出这句话11111");
console.assert(2 === "2", "有问题的话会输出这句话22222");

//JS中异常处理嵌套的情况
try {
    try {
        throw "oops";
    } finally {
        console.log("finally");
    }
} catch (ex) {
    console.error("outer", ex);
}

try {
    try {
        throw "oops";
    } catch (ex) {
        console.error("inner", ex);
    } finally {
        console.log("finally");
    }
} catch (ex) {
    console.error("outer", ex);
}

try {
    try {
        throw "oops";
    } catch (ex) {
        console.error("inner", ex);
        throw ex;
    } finally {
        console.log("finally");
    }
} catch (ex) {
    console.error("outer", ex);
}
//JS的异步
try {
    function abc(x, cb) {
        console.log(x);
        cb();
    }
    abc("xx", function() {
        var arr = new Array(-1);
    });
} catch (e) {
    console.log(e);
}

try {
    function abc(x, cb) {
        console.log(x);
        cb();
    }
} catch (e) {
    console.log(e);
}
abc("xx", function() {
    var arr = new Array(-1);
});