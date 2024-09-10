/* Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number. */


function numberFinder() {

    let input;
    let sum = 0;
    let average = 0;
    let biggest = Number.NEGATIVE_INFINITY;
    let smallest = Number.POSITIVE_INFINITY;
    let previousInput = null;

    for (let i = 1; i < 6; i++) {

        input = +prompt('Enter number ' + i);
        sum += input

        if (input < smallest) {
            smallest = input;
        }

        if (input > biggest) {
            biggest = input;
        }




    }

    average = sum / 5;
    console.log('Sum is ' + sum);
    console.log('average is ' + average)
    console.log('smallest number is ' + smallest)
    console.log('Biggest number is ' + biggest)

} numberFinder();