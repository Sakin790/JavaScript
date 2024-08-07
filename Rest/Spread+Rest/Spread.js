//Spread (...) unpack elements []{}


const number = [1, 3, 4]
const newNumbers = [...number, 12]
console.log(newNumbers);


let myObje = {
    name: "Sakin",
    age: 21
}


const newObj = {
    ...myObje,
    hobby: "Coding"
}
console.log(newObj);


//merge
const newNum = [10, 20, 30]
const oldNum = [40, 50, 60]

const marge = [...newNum, ...oldNum]
console.log(marge);



const user = {
    id: 1,
    date: Date.now(),
    name: 'Sakin islam',

    item: ["Mobile", "Laptop"]
}

user.item.push("Bike")

const cloneUser = {
    ...user
}

console.log(cloneUser);