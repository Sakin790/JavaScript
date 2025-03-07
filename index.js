function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[i] + arr[j + 1] == target) {
        return [arr[i], arr[j + 1]];
      }
    }
  }
}
