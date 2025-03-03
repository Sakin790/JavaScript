function maxValue(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}

let opt = maxValue([43, 55, 65, 78, 233, 1]);
console.log(opt);
