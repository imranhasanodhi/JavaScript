// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

function averageCalculator() {
    let distance, time;

    while (distance != 0) {

        distance = +prompt("Enter distance here");
        if (distance == 0) {
            alert('Incorrect distance');

            break;
        }
        time = +prompt("Enter time here");
        let averagespeed = (distance / time);
        alert('Average speed is ' + averagespeed);

    }
}

averageCalculator();


