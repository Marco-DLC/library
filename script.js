// const myLibrary = [
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


function submitNewBook() {
    const titleVal = document.getElementById('title').value;
    const authorVal = document.getElementById('author').value;
    const genreVal = document.getElementById('genre').value || 'Unknown';
    const pagesVal = document.getElementById('pages').value || 'Unknown';
    const readVal = document.getElementById('read').checked ? 'Read' : 'Not read yet';

    const newBook = new Book(titleVal, authorVal, genreVal, pagesVal, readVal);

    console.log(newBook);
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
    }
})

const bookGrid = document.getElementById('bookGrid');

// function createBookGrid() {
//     myLibrary.forEach((book) => {
//         const bookCard = document.createElement('div');
//         bookCard.classList.add('book-card');

//         bookGrid.appendChild(bookCard);
//     })
// }

// createBookGrid();
