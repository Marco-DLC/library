const myLibrary = [];

function submitNewBook() {
    const titleVal = document.getElementById('title').value;
    const authorVal = document.getElementById('author').value;
    const genreVal = document.getElementById('genre').value || 'Unknown';
    const pagesVal = document.getElementById('pages').value || 'Unknown';
    const readVal = document.getElementById('read').checked ? 'Read' : 'Not read yet';

    const newBook = new Book(titleVal, authorVal, genreVal, pagesVal, readVal);

    myLibrary.push(newBook);
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
    if (submitBookForm.checkValidity() == false) {
        submitBookForm.reportValidity();
    } else {
        e.preventDefault();
        submitNewBook();
        console.log(myLibrary);
        createBookGrid();
    }
})

const bookGrid = document.getElementById('bookGrid');

function createBookGrid() {
    bookGrid.innerHTML = '';
    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        for (const prop in book) {
            if (book.hasOwnProperty(prop)) {
                const bookDetail = document.createElement('p');
                bookDetail.textContent = `${prop}: ${book[prop]}`;
                bookCard.appendChild(bookDetail);
            }
        }

        bookGrid.appendChild(bookCard);
    })
};
