const myLibrary = [];
const bookShelf = document.getElementById("bookShelf")

function Book (id, title, author, pageCount, beenRead ){
    if (!new.target) {
        throw Error("you must use the 'new' operator to call the constructor");
    }
    this.id = id;
    this.title = title; 
    this.author = author;
    this.pageCount = pageCount;
    this.beenRead = beenRead;
    Book.prototype.changeReadStatus = function() {
        this.beenRead = !(this.beenRead);
    }
}

function addBookToLibrary(title, author, pageCount, beenRead){
    id = crypto.randomUUID();
    let book = new Book(id, title, author, pageCount, beenRead );

    myLibrary.push(book);
}
addBookToLibrary("The Lord of the Rings", "J. R. R. Tolkien", 1200, true);
addBookToLibrary("Moby Dick", "Herman Mellville", 750, false);
addBookToLibrary("Eragon", "Christopher Paolini", 544, true);
addBookToLibrary("Sphere", "Michael Chrichton", 528, true);

function displayBooks() {
    bookShelf.innerHTML = "";
    const container = document.getElementById("bookShelf")

    myLibrary.forEach((book, i) => {
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
        bookCard.setAttribute("data-index", index);
        bookCard.id = book.id;

        bookCard.innerHTML = `<div class="book-card">
                                <h3>Index #: ${book.id}</h3>
                                <h1>${book.title}</h1>
                                <h2>By ${book.author}</h2>
                                <h2>Pages: ${book.pageCount}</h2>
                                <button type="button">Status</button>
                                <button type="button">Remove</button>
                                </div>`;
        container.appendChild(bookCard)             
    });
}

