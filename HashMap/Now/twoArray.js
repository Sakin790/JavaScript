let name = ["mahid", "abir", "thor", "sam", "sakin"];
let score = [10, 20, 30];

let map = new Map();

for (let i in name) {
  map.set(name[i], score[i] ?? 0);
}
console.log(map);
