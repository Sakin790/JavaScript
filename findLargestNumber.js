function findLargestNumber(num1, num2, num3) {
    // Assuming all three inputs are numbers
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

// Example usage:
var largestNumber = findLargestNumber(5, 12, 8);
console.log("The largest number is: " + largestNumber);
