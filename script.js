const addBtn = document.querySelector('.add-btn');
const submitBookDialog = document.querySelector('dialog');

const submitBookForm = document.querySelector('form');
const closeFormBtn = document.querySelector('.close');
const submitBookBtn = document.querySelector('.submit');

const bookGrid = document.getElementById('bookGrid');
const myLibrary = [];

function Book(title, author, genre, pages, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    if (this.read === 'Read') {
        this.read = 'Not read yet';
        createBookGrid();
    } else if (this.read === 'Not read yet') {
        this.read = 'Read';
        createBookGrid();
    }
}

submitBookBtn.addEventListener('click', (e) => {
    if (submitBookForm.checkValidity() == false) {
        submitBookForm.reportValidity();
    } else {
        e.preventDefault();
        submitNewBook();
        createBookGrid();
        submitBookForm.childNodes.forEach((child) => {
            (child.value = '') || (child.checked = false)
        });
    }
})

function submitNewBook() {
    const titleVal = document.getElementById('title').value;
    const authorVal = document.getElementById('author').value;
    const genreVal = document.getElementById('genre').value || 'Unknown';
    const pagesVal = document.getElementById('pages').value || 'Unknown';
    const readVal = document.getElementById('read').checked ? 'Read' : 'Not read yet';

    const newBook = new Book(titleVal, authorVal, genreVal, pagesVal, readVal);

    myLibrary.push(newBook);
}

addBtn.addEventListener('click', () => {
    submitBookDialog.show();
    bookGrid.classList.add('shift-down');
})

closeFormBtn.addEventListener('click', () => {
    submitBookDialog.close();
    bookGrid.classList.remove('shift-down');
})

function createBookGrid() {
    bookGrid.innerHTML = '';
    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        const removeBookBtn = document.createElement('button');
        const changeReadBtn = document.createElement('button');
        const bookCardBtns = bookCard.appendChild(document.createElement('div'));

        bookCard.classList.add('book-card');

        changeReadBtn.classList.add('read-btn');
        if (book.read === 'Read') changeReadBtn.classList.add('is-read');
        changeReadBtn.textContent = '🕮';
        changeReadBtn.addEventListener('click',() => {
            book.toggleRead();
        });
        bookCardBtns.appendChild(changeReadBtn);

        removeBookBtn.classList.add('remove-book-btn');
        removeBookBtn.textContent = '✖';
        removeBookBtn.addEventListener('click',() => {
            removeBook(book);
        })
        bookCardBtns.appendChild(removeBookBtn);

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

function removeBook(bookToBeRemoved) {
    myLibrary.map((book) => {
        if (book === bookToBeRemoved) {
            myLibrary.splice(myLibrary.indexOf(book), 1);
            createBookGrid();
        }
    })
}