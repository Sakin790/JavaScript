const hashMap ={}
hashMap["name"] = "Alice";
hashMap["age"] = 25;
hashMap["city"] = "Los Angeles";
console.log(hashMap["city"]);

const exits = "age" in hashMap;
console.log(exits);


for (let i in hashMap) {
    console.log(i, hashMap[i]);
  }

  