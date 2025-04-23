var subsets = function (nums) {
  let result = [[]];

  for (let num of nums) {
    let newSubsets = result.map((subset) => [...subset, num]);
    result.push(...newSubsets);
  }

  return result;
};
