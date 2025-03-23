var searchRange = function (nums, target) {
  let left = 0;
  right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      return [mid, mid + 1]; // Target found, return index
    } else if (nums[mid] < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
