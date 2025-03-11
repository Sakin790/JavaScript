var intersection = function (nums1, nums2) {
  let arr = [...nums1, ...nums2];
  
  let myArr = Array.from(arr);

  return myArr.filter((value, index, self) => self.indexOf(value) !== index);
};

let opt = intersection([1, 2, 2, 1], [2, 2]);
console.log(opt);
