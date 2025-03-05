function swapTwoNumber(num1, num2) {
  let temp = num1;
  num1 = num2;
  num2 = temp;
  return [num1, num2];
}

function bubleSort(nums) {
  let n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = swapTwoNumber(nums[j], nums[j + 1]);
      }
    }
  }
  return nums;
}

let domoArray = [3, 5, 6, 2, 5, 1, 3];
let opt = bubleSort(domoArray);
console.log(opt);
