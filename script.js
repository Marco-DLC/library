const myLibrary = [
    // {
    //     name: 'book1',
    //     read: 'not read',
    //     author: 'author1'
    // },
    // {
    //     name: 'book2',
    //     read: 'read',
    //     author: 'author2'
    // },
    // {
    //     name: 'book3',
    //     read: 'read',
    //     author: 'author3'
    // }
];

function Book(title, author, genre, pages, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const addBookBtn = document.createElement('button');
}

const bookGrid = document.getElementById('bookGrid');

function createBookGrid(){
    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        bookGrid.appendChild(bookCard);
    })
}

createBookGrid();