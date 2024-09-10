
/* 
Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

function changeText() {
    // Select the element with the id "content"
    const contentElement = document.getElementById('content');
    
    // Update the text content of the selected element
    contentElement.textContent = "Hello, World!";
}
