const people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 16 },
  { name: "Charlie", age: 30 },
];

const adults = people.filter((person) => person.age >= 18);

console.log(adults);

const values = [0, "hello", "", null, 42, undefined, "world"];
const truthyValues = values.filter(Boolean);

console.log(truthyValues);
