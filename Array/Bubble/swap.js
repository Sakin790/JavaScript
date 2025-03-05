function swapTwoNumber(num1, num2) {
  let temp = num1;
  num1 = num2;
  num2 = temp;
  return [num1, num2];
}

let result = swapTwoNumber(3, 5);

let arr = [1, 2, 3, 4, 5];
[arr[1], arr[3]] = [arr[3], arr[1]]; // Swap elements at index 1 and 3
console.log(arr);
