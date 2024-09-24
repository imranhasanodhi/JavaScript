// # Cars

// 1. **Create a Car Class:**

//    - Define a `Car` class with properties for the car's license plate, maker, model, current owner, price, and color.

class car {
    constructor(licensePlate, maker, model, currentOwner, price, color){
        this.licensePlate = licensePlate;
        this.maker = maker;
        this.model = model;
        this.currentOwner = currentOwner;
        this.price = price;
        this.color = color;
    }

}

//Array to store car collection
let carCollection = [];

// 2. **User Input for Car Details:**

//    - Set up an HTML form for users to input the car's license plate, maker, model, current owner, price, and color.
//    - Use JavaScript to collect the values entered by the user when the form is submitted.

document.getElementById('carForm').addEventListener('submit', function(event){
    event.preventDefault() // Prevent the form from submitting the traditional way
        // Collect values from the form
        const licensePlate = document.getElementById('licensePlate').value;
        const maker = document.getElementById('maker').value;
        const model = document.getElementById('model').value;
        const currentOwner = document.getElementById('currentOwner').value
        const price = document.getElementById('price').value
        const color = document.getElementById('color').value

        // Create a new Car object using the collected value
        const newCar = new car(licensePlate, maker, model, currentOwner, price, color)
        //show collected value from html form to console by javascript
        console.log(newCar);

        // Add the new car value to carCollection array for store data.
        carCollection.push(newCar); // pushing value to array.

         // Display the updated car collection in the table
        displayCarTable();


})

//Function to display car collection to the table
function displayCarTable(){
    const tableBody = document.getElementById('carTableBody')
    tableBody.innerHTML = ''; // Clear existing rows
    
    // Loop through the carCollection array and create table rows

    carCollection.forEach((car)=>{

        const row = document.createElement('tr'); // Create a new row
        const licensePlateCell = document.createElement('td')
        licensePlateCell.textContent = car.licensePlate
        row.appendChild(licensePlateCell);
        const makerCell = document.createElement('td');
        makerCell.textContent = car.maker;
        row.appendChild(makerCell);

        const modelCell = document.createElement('td');
        modelCell.textContent = car.model;
        row.appendChild(modelCell);

        const currentOwnerCell = document.createElement('td');
        currentOwnerCell.textContent = car.currentOwner;
        row.appendChild(currentOwnerCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = car.price
        row.appendChild(priceCell);

        const colorCell = document.createElement('td');
        colorCell.textContent = car.color;
        row.appendChild(colorCell);

        // Append the row to the table body
        tableBody.appendChild(row)
    })
}

// 3. **Create and Store Car Objects:**

//    - Upon form submission, instantiate a new `Car` object using the collected input values.
//    - Add this new `Car` object to an array that stores all the cars entered by the user.

// 4. **Display Car Information:**

//    - Use JavaScript to dynamically generate a table on the webpage, displaying the information of each car in the array.
//    - Ensure the table updates to include each new car when it is added.

// 5. **Search for a Car by License Plate:**

//    - Implement a function that allows the user to search for a car using its license plate.
//    - Include error handling to manage cases where the search input is invalid or the license plate cannot be found.

// 6. **Show Search Results:**

//    - If the search successfully finds a car, display the car's make, model, and owner on the screen.
//    - If no matching car is found, display a message indicating that no results were found.



