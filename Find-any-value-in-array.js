let fruits = ['apple', 'banana', 'orange', 'kiwi'];

let secondElement;

fruits.forEach(function(fruit, index) {
    if (index === 1) {
        secondElement = fruit;
    }
});

console.log(secondElement); // Output: 'banana'
