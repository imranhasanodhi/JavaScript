
// Listens for changes on the pancake type select box and all checkbox inputs.
// Calculates the total price based on selections:
// Pancake type has a base price.
// Each topping adds $1 to the base price.
// Extras have their specific prices.
// Displays the dynamically updated total price in the #totalPrice span.
// Use the addEventListener method for listening to changes and the suitable loop for iterating through checkbox inputs to calculate the total price. Remember to parse checkbox values as integers before adding them to the total.


const type = document.getElementById('type');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const total = document.getElementById('totalPrice');
const eatIn = document.getElementById('eatIn');
const pickUp = document.getElementById('pickUp');
const delivery = document.getElementById('delivery');
const selectedMethod = document.getElementById('selectedMethod');
const orderSummary = document.getElementById('orderSummary');
const customerName = document.getElementById('customerName');
const seeOrderBtn = document.getElementById('seeOrder');
let orders = []
function updatePrice() {
    let totalPrice = parseInt(type.value);
    const customer = customerName.value;
    const pancakeType = type.options[type.selectedIndex].text;
    const toppings = getSelectedToppings();
    const deliveryMethod = getSelectedDeliveryMethod();
    const order = {
        customer,
        pancakeType,
        toppings,
        deliveryMethod,
        totalPrice
    };

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            totalPrice += parseInt(checkbox.value);
        }
    });
    if (delivery.checked) {
        totalPrice += parseInt(delivery.value); // Adds €5 if "Eat In" is selected
    }


    total.textContent = `€${totalPrice}`;
}
function updateOrder() {
    const customer = customerName.value;
    const pancakeType = type.options[type.selectedIndex].text;
    const toppings = getSelectedToppings();
    const deliveryMethod = getSelectedDeliveryMethod();
    const totalPrice = updatePrice();
    if (!customer) {
        alert('Please enter your name.');
        return;
    }

    // Store the order in an array
    const order = {
        customer,
        pancakeType,
        toppings,
        deliveryMethod,
        totalPrice
    };

    // Update or add the order to the orders array
    const existingOrderIndex = orders.findIndex(o => o.customer === customer);
    if (existingOrderIndex > -1) {
        orders[existingOrderIndex] = order; // Update existing order
    } else {
        orders.push(order); // Add new order
    }

    // Display the order summary
    displayOrderSummary(order);
}
function displayOrderSummary(order) {
    orderSummary.innerHTML = `
        <h3>Order Summary</h3>
        <p><strong>Customer:</strong> ${order.customer}</p>
        <p><strong>Pancake Type:</strong> ${order.pancakeType}</p>
        <p><strong>Toppings:</strong> ${order.toppings.join(', ') || 'None'}</p>
        <p><strong>Delivery Method:</strong> ${order.deliveryMethod}</p>
        <p><strong>Total Price:</strong> €${order.totalPrice}</p>
    `;
}

type.addEventListener('change', updatePrice);
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', updatePrice);
});
delivery.addEventListener('change', updatePrice);
pickUp.addEventListener('change', updatePrice);
eatIn.addEventListener('change', updatePrice);
seeOrderBtn.addEventListener('click', updateOrder);

updatePrice();

