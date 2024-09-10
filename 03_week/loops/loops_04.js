// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even. Do not use array.

function evenNumberpicker() {
    let count = 0;
    for (let i = 1; i <= 20; i++) {

        let userInput = +prompt('Enter number ' + i)
        if (userInput % 2 == 0) {
            count = count + 1;
        }

    }

    console.log('entered even number count is ' + count);
}


evenNumberpicker();