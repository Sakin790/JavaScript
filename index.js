/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let uniqueChars = [...new Set(s)];
  let hashMap = {};

  for (let char of uniqueChars) {
      hashMap[char] = 0;
  }

  for (let char of s) {
      hashMap[char]++;
  }
  let values = Object.values(hashMap);
  let allEqual = values.every(val => val === values[0]);

  return allEqual;
};