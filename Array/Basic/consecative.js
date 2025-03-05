function one(nums) {
  let count = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count += 1;
    } else {
      max = Math.max(max, count);
      count = 0;
    }
  }

  return Math.max(count, max);
}
