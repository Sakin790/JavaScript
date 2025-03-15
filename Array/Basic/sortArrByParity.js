var sortArrayByParityII = function (nums) {
    let odd = [];
    let even = [];
  
    if (nums.length <= 1) return nums;
  
    for (let i = 0; i < nums.length; i++) {
      if (i % 2 == 0) {
        even.push(nums[i]);
      } else {
        odd.push(nums[i]);
      }
    }
  
    let sorted = [...even, ...odd];
    return sorted;
  };
  