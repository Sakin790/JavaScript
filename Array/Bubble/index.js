//compare two element, adjust bigger elemenet in last

let domoArray = [3, 5, 6, 2, 5, 1, 3];

function bubleSort(nums) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        nums[j + 1] = nums[j];
      }
    }
  }
}
