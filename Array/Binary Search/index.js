function binarySearch(nums = [], terget) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === terget) {
      return mid;
    }
    if (nums[mid] < terget) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

let result = binarySearch([0, 3, 4, 7, 9, 12], 7);
console.log(result);
