let name = ["mahid", "abir", "sam", "sakin"];
let score = [10, 20, 30];

let map = new Map();

for (let i = 0; i < name.length; i++) {
  map.set(name[i], score[i] !== undefined ? score[i] : 0);
}
console.log(map);
