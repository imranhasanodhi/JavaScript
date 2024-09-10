// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.



function averageFinder() {

    let userInput;
    let sum = 0;
    let count = 0;


    do {

        userInput = +prompt('Enter your number here');
        if (userInput != 0) {
            sum = sum + userInput;
            count = count + 1;
        }
    }

    while (userInput != 0)



    let average = sum / count;
    alert('Average of all the entered numbers is ' + average);

}

averageFinder();