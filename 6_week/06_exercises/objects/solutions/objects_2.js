/* Task 1
Create a JavaScript object named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

// Your code here
const library = {
    books: [
        {
            title: "Devdash",
            author: "Sarathchandra Chatropaddhoy",
            yearPublished: "1930"

        },
        {
            title: "Hamlet",
            author: "Shakespere",
            yearPublished:"1650"
        }
    ]
}
console.log(library)

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
console.log("The first book of the library:", library.books[0].title)
// Modify the yearPublished for the second book
library.books[1].yearPublished = 1950;

// Log the updated second book object
console.log("Updated second book:", library.books[1]);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
// Add a new property 'genres' using dot notation
library.books[0].genres = ["Fiction", "Classic", "Historical"];

// Add a boolean property 'isAvailable' using bracket notation
library.books[0]["isAvailable"] = true;

// Log the updated first book object to see the changes
console.log("Updated first book:", library.books[0]);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here

// Define the Book constructor function
function Book(title, author, yearPublished, genres) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
}

// Create a new book object using the Book constructor
const newBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, ["Fiction", "Classic"]);

// Add the new book object to the library collection
library.books.push(newBook);

// Log the updated library object to see the new book added
console.log("Updated library:", library);

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here
// Task 5

// Define the createBook function
function createBook(title, author, yearPublished, genres) {
    return {
        title: title,
        author: author,
        yearPublished: yearPublished,
        genres: genres
    };
}

// Test the createBook function with user-provided input
const newBook1 = createBook("The Catcher in the Rye", "J.D. Salinger", 1951, ["Fiction", "Classic"]);

// Log the new book object to the console
console.log("New Book:", newBook);


/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/
// Convert the library object to a JSON string
const libraryJSON = JSON.stringify(library);

// Log the JSON string to the console
console.log("Library JSON:", libraryJSON);

// Parse the JSON string back into a JavaScript object
const parsedLibrary = JSON.parse(libraryJSON);

// Log the title of the first book
console.log("Title of the first book:", parsedLibrary.books[0].title);