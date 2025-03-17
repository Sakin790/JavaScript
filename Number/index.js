var rotateString = function (s, goal) {
  let arr1 = s.split("");
  let arr2 = goal.split("");
  if (arr1.length !== arr2.length) return false;
  return arr1.every((value, index) => value === arr2[index]);
};
