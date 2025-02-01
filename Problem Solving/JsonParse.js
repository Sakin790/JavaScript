const data = {
  name: "json",
  age: 30,
  city: "Man city",
};
const jsonString = JSON.stringify(data);
console.log(jsonString);
const dataBack = JSON.parse(jsonString);
console.log("String to JSON:", dataBack);
