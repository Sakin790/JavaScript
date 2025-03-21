var findDuplicates = function (nums) {
  let map = new Map();
  let result = [];

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let [key, value] of map.entries()) {
    if (value > 1) {
      result.push(key);
    }
  }
  return result;
};
var findDuplicates = function(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;

        if (nums[index] < 0) {
            result.push(index + 1);
        } else {
            nums[index] = -nums[index]; 
        } 
    }