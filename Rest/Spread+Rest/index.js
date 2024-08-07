function sum(...numbers) {
    let result = 0
    for (let sum of numbers) {
        result += sum
    }
    return result
}

const allnumber = [55, 22, 566, 55, 87]
console.log(sum(...allnumber, 22));

console.log(sum(12, 55, 55, 555));