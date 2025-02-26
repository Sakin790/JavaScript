function insertIntoFirst(array, element) {
    let newArr = new Array(array.length + 1);

    for (let i = array.length; i > 0; i--) {
        newArr[i] = array[i - 1];
    }
    newArr[0] = element;

    return newArr;
}

let arr = [2, 3, 4];
let newElement = 1;
let result = insertIntoFirst(arr, newElement);
console.log(result); 
