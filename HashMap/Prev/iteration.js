const hashMap = {};

hashMap["name"] = "Alice";
hashMap["age"] = 25;
hashMap["city"] = "Los Angeles";

for (let i in hashMap) {
  console.log(i, hashMap[i]);
}

const hasSeen = {}; // Tracks seen elements
const arr = [1, 2, 3, 1, 2, 4];

for (let num of arr) {
    console.log(num);
  if (!hasSeen[num]) {
    console.log(num); // Prints unique numbers
    hasSeen[num] = true;
  }
}
