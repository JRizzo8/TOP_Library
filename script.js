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
addBookToLibrary("Eragon", "Christopher Paolini", 800, true);
addBookToLibrary("Sphere", "Michael Chrichton", 900, true);

function displayBooks() {
    bookShelf.innerHTML = "";

    myLibrary.forEach((Book, index /* or just i */) => {
        const card = '<div class="book-card" id="${book.id}'
    });

}

