//
// In JavaScript, the forEach method is used to iterate over the elements of an array
//  and execute a provided function once for each element. This method is very useful for performing operations on each element of the array.

const number = [10, 20, 30, 45];
number.forEach((value, index) => {
  console.log(`Index is ${index} value is ${value}`);
});

// Example array
const fruits = ["apple", "banana", "cherry"];

// Using forEach to access element, index, and array
fruits.forEach((fruit, index, array) => {
  console.log(`Element: ${fruit}, Index: ${index}, Array: ${array}`);
});
