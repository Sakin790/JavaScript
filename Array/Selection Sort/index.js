function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // Assume the first unsorted element is the smallest

    // Find the minimum element in the remaining array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Update the index of the new minimum
      }
    }

    // Swap the found minimum element with the first unsorted element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example Usage
let domoArray = [3, 5, 6, 2, 5, 1, 3];
console.log(selectionSort(domoArray)); // Output: [1, 2, 3, 3, 5, 5, 6]
