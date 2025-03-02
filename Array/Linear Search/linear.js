function LinearSearch(arr, terget) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == terget) {
      return i;
    }
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let terget = 5;

console.log(LinearSearch(arr, terget));
