function swapTwoNumber(num1, num2) {
  let temp = num1;
  num1 = num2;
  num2 = temp;
  return [num1, num2];
}

let result = swapTwoNumber(3, 5);
