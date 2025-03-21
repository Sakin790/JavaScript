let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
let map = new Map();

for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
}

console.log(map);
