// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.


function averageFinder() {


    let sum = 0;
    let count = 0;
    let expression, input;

    do {


        input = +prompt('Enter your number');
        expression = confirm('Do you want to continue?');
        sum = sum + input;
        count++

    }

    while (expression)

    let average = sum / count
    alert('Average is ' + average);


}

averageFinder();