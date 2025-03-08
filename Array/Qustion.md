# Array

1. Check if a value Exit or not?

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return arr[i];
    } else return -1;
  }
  return arr;
}
```

2. Marge two Array

```js
function margeTwoArr(arr1, arr2) {
  let margedArr = [...arr1, ...arr2];
  return margedArr;
}
-----------------
function margeTwoArr(arr1, arr2) {
  let temp = [];

  for (let i = 0; i < arr1.length; i++) {
    temp.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    temp.push(arr2[i]);
  }
  return temp;
}
```

3. find index of a Element

```js
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex([10, 20, 30], 20));
```
