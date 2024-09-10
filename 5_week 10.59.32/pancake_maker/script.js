
// Listens for changes on the pancake type select box and all checkbox inputs.
// Calculates the total price based on selections:
// Pancake type has a base price.
// Each topping adds $1 to the base price.
// Extras have their specific prices.
// Displays the dynamically updated total price in the #totalPrice span.
// Use the addEventListener method for listening to changes and the suitable loop for iterating through checkbox inputs to calculate the total price. Remember to parse checkbox values as integers before adding them to the total.


const type = document.getElementById('type');
const checkboxes = document.querySelectorAll('input [type = "checkbox"]');
const total = document.getElementById('totalPrice') ;
document.addEventListener('Content', function(){
function updatePrice(){
    let totalPrice = parseInt(type.value);
    checkboxes.forEach((checkbox) => {
        if(checkbox.checked){
        totalPrice = totalPrice+parseInt(checkbox.value);
        }
        total.addEventListener('change', totalPrice)

    })
    total.textContent() = '€{totalPrice}'
}

    type.addEventListener('change', updatePrice); 
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', updatePrice); 
    });
    updatePrice();
});§