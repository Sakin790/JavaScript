let mySet = new Set();
console.log(mySet);
mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet);

let isHas = mySet.has(1);
console.log(isHas);

for (const element of mySet) {
  console.log("Element of set is", +element);
}

mySet.forEach((value) => {
  console.log(value + 10);
});
console.log(mySet.size);
