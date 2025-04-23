const hasSeen = new Map();
const duplicates = new Set();
const arr = [1, 2, 3, 1, 2, 4];


for (const num of arr) {
  if (hasSeen.has(num)) {
    duplicates.add(num);
  } else {
    hasSeen.set(num, true);
  }
}

console.log([...duplicates]);
