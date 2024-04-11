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

function getFormResults(e) {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const genreInput = document.getElementById('genre');
    const pagesInput = document.getElementById('pages');
    const readInput = document.getElementById('read');

    if (readInput.checked == true) {
        readInput.value = 'Read'
    } else {
        readInput.value = 'Not read yet';
    };

    console.log(titleInput.value, authorInput.value, genreInput.value,
        pagesInput.value, readInput.value);
}

function Book(title, author, genre, pages, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

const submitBookForm = document.querySelector('form');
const submitBookBtn = document.querySelector('.submit');

submitBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getFormResults(e);
})

const bookGrid = document.getElementById('bookGrid');

function createBookGrid(){
    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        bookGrid.appendChild(bookCard);
    })
}

createBookGrid();
