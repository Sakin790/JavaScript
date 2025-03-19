var findDuplicates = function (nums) {
  const seen = new Set();
  return nums.filter((value) => (seen.has(value) ? true : seen.add(value)));
};
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
