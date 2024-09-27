// # Cars

// 1. **Create a Car Class:**

//    - Define a `Car` class with properties for the car's license plate, maker, model, current owner, price, and color.

class car {
    constructor(licensePlate, maker, model, currentOwner, price, color, year, ){
        this.licensePlate = licensePlate;
        this.maker = maker;
        this.model = model;
        this.currentOwner = currentOwner;
        this.price = price;
        this.color = color;
        this.year = year;
    }

}

//Array to store car collection
let carCollection = [];

// 2. **User Input for Car Details:**

//    - Set up an HTML form for users to input the car's license plate, maker, model, current owner, price, and color.
//    - Use JavaScript to collect the values entered by the user when the form is submitted.

document.getElementById('carForm').addEventListener('submit', function(event){
    event.preventDefault() 
    const errorDiv = document.getElementById('formError');
    errorDiv.innerHTML = '';  // Clear any previous error messages

    try {
        // Collect values from the form
        const licensePlate = document.getElementById('licensePlate').value.trim();
        const maker = document.getElementById('maker').value.trim();
        const model = document.getElementById('model').value.trim();
        const currentOwner = document.getElementById('currentOwner').value.trim();
        const price = parseFloat(document.getElementById('price').value.trim());
        const color = document.getElementById('color').value.trim();
        const year = parseInt(document.getElementById('year').value.trim());

        // Get the current year for validation
        const currentYear = new Date().getFullYear();

        // Validation checks using try-catch
        if (!licensePlate) {
            throw new Error('License plate can not be empty.');
        }
        if (!maker) {
            throw new Error('Maker field can not be empty.');
        }
        if (!model) {
            throw new Error('Model field can not be empty');
        }
        if (!currentOwner) {
            throw new Error('Current owner field can not be empty.');
        }
        if (isNaN(price) || price <= 0) {
            throw new Error('Price must be a positive number.');
        }
        if (!color) {
            throw new Error('Color field csn not be empty');
        }
        if (isNaN(year) || year < 1886 || year > currentYear) {
            throw new Error(`Year must be a number between 1886 and ${currentYear}.`);
        }
      

        // Create a new Car object using the collected values
        const newCar = new car(licensePlate, maker, model, currentOwner, price, color, year);

        // Add the new car to the carCollection array
        carCollection.push(newCar);

        // Display the updated car collection in the table
        displayCarTable();

        // Clear the form after submission
        document.getElementById('carForm').reset();

    } catch (error) {
        // Catch any error and display it to the user
        showError(error.message);
        alert(error)  // for alerting error message in the comand promt
    } 

})



// Function to display error message
function showError(message) {
    const errorDiv = document.getElementById('formError');
    errorDiv.innerHTML = `${message}`;
}

// function calculateDiscountprice() {
//     const age = currentYear - this.year;

//     if (age > 10) {
//         return this.price * .85; 
//     }else{
//     return this.price; 
//     }
// }
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

        const yearCell = document.createElement('td');
        yearCell.textContent = car.year;
        row.appendChild(yearCell); 
        const discountCell = document.createComment('td')
        discountCell.textContent = car.discount;
        row.appendChild(discountCell);

        // Append the row to the table body
        tableBody.appendChild(row)
    })
}


// Function to search a car by license plate
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

   // Get the search input value
   const searchLicensePlate = document.getElementById('searchLicensePlate').value.trim();

   // Search for the car in the carCollection array
   const foundCar = carCollection.find(car => car.licensePlate === searchLicensePlate);

   // Display the result
   const searchResultsDiv = document.getElementById('searchResults');
   searchResultsDiv.innerHTML = ''; // Clear previous results

   // Create a table for search results
   const resultsTable = document.createElement('table');
   resultsTable.style.width = '100%';
   resultsTable.style.borderCollapse = 'collapse';

   // Create table header
   const thead = document.createElement('thead');
   thead.innerHTML = `
       <tr>
           <th>License Plate</th>
           <th>Maker</th>
           <th>Model</th>
           <th>Current Owner</th>
           <th>Price</th>
           <th>Color</th>
           <th>Year</th>
       </tr>
   `;
   resultsTable.appendChild(thead);

   // Create table body
   const tbody = document.createElement('tbody');

   if (foundCar) {
       // If the car is found, display its details
       const row = document.createElement('tr');
       row.innerHTML = `
           <td>${foundCar.licensePlate}</td>
           <td>${foundCar.maker}</td>
           <td>${foundCar.model}</td>
           <td>${foundCar.currentOwner}</td>
           <td>€${foundCar.price}</td>
           <td>${foundCar.color}</td>
           <td>${foundCar.year}</td>
       `;
       tbody.appendChild(row);
       resultsTable.appendChild(tbody);

       // Add a heading above the results table
       searchResultsDiv.innerHTML = '<h1>Here Is Your Search Result:</h1>';
   } else {
       // If the car is not found, show an error message
       searchResultsDiv.innerHTML = '<h1>No car found with that license plate.</h1>';
   }

   // Append the results table to the search results div
   searchResultsDiv.appendChild(resultsTable); 
});

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



