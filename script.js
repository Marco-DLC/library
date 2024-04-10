const myLibrary = [
    {
        name: 'book1',
        read: 'not read',
        author: 'author1'
    },
    {
        name: 'book2',
        read: 'read',
        author: 'author2'
    },
    {
        name: 'book3',
        read: 'read',
        author: 'author3'
    }
];

// function Book() {

// }

// function addBookToLibrary() {

// }

const bookGrid = document.getElementById('bookGrid');

function createBookGrid(){
    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        bookCard.textContent = Object.entries(book).join(' ', '');
        bookGrid.appendChild(bookCard);
    })
}

createBookGrid();