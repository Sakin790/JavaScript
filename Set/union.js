const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

// Union
const union = new Set([...setA, ...setB]);
console.log(union); // Set { 1, 2, 3, 4, 5 }

// Intersection
const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log(intersection); // Set { 3 }

// Difference
const difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log(difference); // Set { 1, 2 }
