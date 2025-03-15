var myAtoi = function (s) {
  return s.split(" ").sort((a, b) => a.match(/\d+/) - b.match(/\d+/));
};

console.log(myAtoi("1337c0d3")); // "a b
