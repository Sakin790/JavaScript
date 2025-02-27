function insertLast(arr = [], value = "") {
  let newArray = [];

  // Copy elements from arr to newArray using a loop
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = arr[i];
  }

  // Insert the new value at the last index
  newArray[arr.length] = value;

  return newArray;
}

let result = insertLast(["one", "two"], "three");
console.log(result[2]); // Output: "three"
