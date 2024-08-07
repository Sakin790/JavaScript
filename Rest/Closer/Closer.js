function outer() {
    console.log("Outer");
    function inner() {
        console.log("Inner");
    }
    inner()
}
outer()


function outer1() {
    console.log("Outer Function");
    return function inner1() {
        console.log("Inner Function");
    }
}

let x = outer1()

x()


function A() {
    function B() {
        function C() {
            function D() {
                console.log("D");
            }
            D()
        }
        C()
    }
    B()
}

A()



function baba() {
    bari = "Shantiniketon"

    function chele() {
        bari = "Anandaniketon"
        console.log(bari);
    }
    chele()
}

baba()


function fun1(value) {
    function fun2() {
        console.log(value);
    }
    fun2()
}

fun1("Sakin")

/*
1. inner function outer function er all property access korte pare
2. Outer function call houar por tar nijer all property stack memory theke
  out kore deya hoi, garbadge collector collect kore ney, kintu jodi 
  inner function er moddhe outer function er kono property use kore hoi
  tahole seta garbdge collect kore na, obossho inner function k return
  korte hobe 


  
function baba() {
    bari = "Shantiniketon"

    function chele() {
        bari = "Anandaniketon"
        console.log(bari);
    }
    chele()
}

baba()

*/