
var majorityElement = function (nums) {
    let map = new Map();
    let threshold = Math.floor(nums.length / 3);
    let result = [];
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for (let [key, value] of map.entries()) {
        if (value > threshold) {
            result.push(key);
        }
    }

    return result;
};