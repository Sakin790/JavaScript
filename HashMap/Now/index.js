let person = new Map();
person.set("mimi", 19);
person.set("sakin", 23);
console.log(typeof person.values());
person.delete("sakin");

person.forEach((value, key) => {
  console.log(`Value is ${value} and key is ${key}`);
});

for (let [key, value] in person.entries()) {
  console.log(key, value);
}
console.log(person);
