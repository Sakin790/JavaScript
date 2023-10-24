// Function er moddhe onek argument pass korar way
function CartPrice(...num1) {
  return num1;
}
console.log(CartPrice(200, 300, 400));

//function er moddhe object pass koranir way
const user = {
  name: "Sakin_DEV79",
  Platfrom: "github",
};
function handleObject(user) {
  console.log(`Hello ${user.name} You are using ${user.Platfrom}`);
}
handleObject(user);

// function er moddhe Array pass korte hole
const NewArray = [200, 300, 400];
function ArrayInObject(array) {
  return array[2];
}
console.log(ArrayInObject(NewArray));

const myFun = (argg) => {
  console.log(`Hello ${argg}`);
};
myFun(2);


 
let vall1 = 20;
let vall2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return;
}

let result1 = addNum(vall1, vall2);
let result2 = addNum(10, 2);
console.log(result1, result2);
