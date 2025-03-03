function reverseArray(nums) {
  let nums2 = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    nums2.push(nums[i]);
  }
  return nums2;
}

let opt = reverseArray([1, 2, 3]);
console.log(opt);

function reverseArray(nums) {
  let nums2 = new Array(nums.length);

  for (let i = nums.length - 1, j = 0; i >= 0; i--, j++) {
    nums2[j] = nums[i];
  }

  return nums2;
}

let opt2 = reverseArray([1, 2, 3]);
console.log(opt); // Output: [3, 2, 1]
