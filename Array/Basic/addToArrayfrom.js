var addToArrayForm = function (num, k) {
  let value = parseInt(num.join("")); //
  console.log(value);
  let sum = value + k;
  let arr = sum.toString().split("").map(Number);
  return arr;
};
console.log(addToArrayForm([1, 2, 3], 7));
