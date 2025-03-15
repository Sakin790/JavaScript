if (nums.length <= 1) return 0;
nums.sort((a, b) => a - b);
let uniqueAvg = new Set();

let left = 0,
  right = nums.length - 1;

while (left < right) {
  let avg = (nums[left] + nums[right]) / 2.0;
  uniqueAvg.add(avg);
  left++;
  right--;
}
return uniqueAvg.size;
