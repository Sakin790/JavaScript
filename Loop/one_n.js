function one_to_n(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

function even() {
  for (i = 2; i <= 100; i += 2) {
    console.log(i);
  }
}

function odd() {
  for (i = 1; i <= 100; i += 2) {
    console.log(i);
  }
}

function sumOfNaturalNumber(n) {
  let restlt = 0;
  for (i = 1; i <= n; i++) {
    restlt += i;
  }
  return restlt;
}

function reverseOfNumber(n) {
  let reverse = "";
  for (let i = n.length - 1; i >= 0; i--) {
    reverse += n[i];
  }
  return reverse;
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}
console.log(sum);
