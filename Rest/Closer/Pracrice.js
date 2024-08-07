
//Q:1
function outer() {
    var x = 10
    function inner() {
        // inner function x varibable k close kore niyese
        console.log(x);
    }
    x = 20
    return inner
}

var innerFunc = outer()//outer function distroy but x variable still alive
innerFunc()

//Q:2
function outer1() {
    var x = 10
    function inner1() {
        var y = 5
        console.log(x + y);
    }
    var x = 20
    return inner1
}

var innerFunc = outer1()
innerFunc()