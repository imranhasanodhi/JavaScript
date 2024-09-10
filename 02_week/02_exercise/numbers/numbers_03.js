/*
- Create a variable named 'num1' and assign it a floating-point value.
- Create a variable named 'num2' and assign it a different floating-point value.

- Round both 'num1' and 'num2' to the nearest integer and store the results in variables 'roundedNum1' and 'roundedNum2'.
- Calculate the square root of 'roundedNum1' and store it in a variable named 'sqrtNum1'.
- Find the larger number between 'roundedNum1' and 'roundedNum2' and store it in a variable named 'maxNum'.

- Use console.log() to print 'roundedNum1', 'roundedNum2', 'sqrtNum1', and 'maxNum' to the console.
- Use the typeof operator to check the data type of each new variable and print the result using console.log().
*/

let num1 = 11.5;
let num2 = 15.5;

let roundedNum1 = Math.round(num1);
let roundedNum2 = Math.round(num2);

let sqrtNum1 = Math.sqrt(roundedNum1);

let maxNum = Math.max(roundedNum1,roundedNum2);

console.log(roundedNum1);
console.log(roundedNum2);
console.log(sqrtNum1);
console.log(maxNum);

console.log(typeof(roundedNum1));
console.log(typeof(roundedNum2));
console.log(typeof(sqrtNum1));
console.log(typeof(maxNum));