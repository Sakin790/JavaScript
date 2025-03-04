function removeDuplicates(arr) {
  let map = new Map();
  let result = [];

  for (let item of arr) {
    if (!map.has(item)) {
      map.set(item, true);
      result.push(item);
    }
  }

  return result;
}

// Example usage
const arr = [1, 2, 3, 2, 4, 1, 5];
console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5]
