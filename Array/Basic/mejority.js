var majorityElement = function majorityElement(nums) {
  const countMap = new Map();
  const majorityCount = Math.floor(nums.length / 2);

  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);

    if (countMap.get(num) > majorityCount) {
      return num;
    }
  }

  return -1;
};
