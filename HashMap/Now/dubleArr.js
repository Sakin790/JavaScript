var findLonely = function (nums) {
  let lonely = [];
  let numSet = new Set(nums);
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let num of nums) {
    if (map.get(num) === 1 && !numSet.has(num - 1) && !numSet.has(num + 1)) {
      lonely.push(num);
    }
  }

  return lonely;
};

console.log(findLonely([10, 6, 5, 8]));
