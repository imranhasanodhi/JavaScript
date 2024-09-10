
const myId = document.getElementById('myId');
const mySecondId = document.querySelector('#myId');

const myClass = document.getElementsByClassName('myClass');
const mySecondClass = document.querySelectorAll('.myClass');
const myClassSecond = document.querySelector('.myClass');

const myParagraph = document.getElementsByTagName('p');
const button = document.querySelector('#whatever');
const list = document.querySelector('ul')
const headline = document.querySelector('h1')

let newElement = document.createElement()

function myFunction() {
    console.log('this was trigerred in html!!!');
    headline.textContent = 'what I just did?!?!?!'
    button.style.color = 'green'
   
}

function myFunction2() {
    console.log('wow, it was äddeventlistener');
    headline.textContent = 'I fixed it'
    button.textContent = 'fix it'
    button.style.color = 'red'
    button.style.fontSize = '100px'
     headline.style.backgroundColor = 'yellow'
     //headline.remove()
     list.appendChild(newElement)

}

document.querySelector('#whatever').addEventListener('click', myFunction2)
button.addEventListener('click', myFunction2)


document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const pancakeTypeSelect = document.getElementById('type');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalPriceElement = document.getElementById('totalPrice');
  
    // Function to update the total price
    function updatePrice() {
      // Get the base price from the selected pancake type
      let totalPrice = parseInt(pancakeTypeSelect.value);
  
      // Loop through each checkbox to add its value if checked
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          totalPrice += parseInt(checkbox.value); // Parse value as integer before adding
        }
      });
  
      // Update the displayed total price
      totalPriceElement.textContent = `$${totalPrice}`;
    }
  
    // Add event listeners
    pancakeTypeSelect.addEventListener('change', updatePrice); // Listen for changes in pancake type
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', updatePrice); // Listen for changes in each checkbox
    });
  
    // Initialize price on page load
    updatePrice();
  });
  

