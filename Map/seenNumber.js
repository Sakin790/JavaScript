const hasSeen = new Map();
const arr = [1, 2, 3, 1, 2, 4];

let unique = [];

for (let key of arr) {
  if (!hasSeen.has(key)) {
    hasSeen.set(key, true);
    unique.push(key);
  }
}

