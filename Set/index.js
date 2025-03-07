function secondDuplicate(arr) {
  let uniqueArr = Array.from(new Set(arr));
  let sorted = uniqueArr.sort();
  return sorted[sorted.length - 2];
}

let opt = secondDuplicate([32, 43, 55, 23, 42, 32]);
console.log(opt);
