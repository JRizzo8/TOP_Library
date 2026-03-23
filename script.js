const myLibrary = [];
const bookShelf = document.getElementById("bookShelf");
const addBtn = document.getElementById("addBtn");
const removeButtons = document.getElementsByClassName("rmvBtn");
const dialog = document.querySelector("dialog");
const closeDialog = document.getElementById("clsDialogBtn");

addBtn.addEventListener("click", () => {
    dialog.showModal();
});
closeDialog.addEventListener("click", () => {
    dialog.close();
});
function Book (id, title, author, pageCount,bookCover, beenRead ){
    if (!new.target) {
        throw Error("you must use the 'new' operator to call the constructor");
    }
    this.id = id;
    this.title = title; 
    this.author = author;
    this.pageCount = pageCount;
    this.bookCover = bookCover;
    this.beenRead = beenRead;

}
Book.prototype.changeReadStatus = function() {
    this.beenRead = !(this.beenRead);
};
Book.prototype.getReadStatus = function(){
    if (!this.beenRead){
        return "Unread";
    }
    else {
        return "Read";
    }
};

function addBookToLibrary(title, author, pageCount, bookCover , beenRead){
    id = crypto.randomUUID();
    let book = new Book(id, title, author, pageCount, bookCover , beenRead );

    myLibrary.push(book);
}
addBookToLibrary("The Lord of the Rings", "J. R. R. Tolkien", 1200,"assets/lotrCover.jpg", true);
addBookToLibrary("Moby Dick", "Herman Mellville", 750, "assets/mobyCover.jpg", false);
addBookToLibrary("Eragon", "Christopher Paolini", 544, "assets/eragonCover.jpg", true);
addBookToLibrary("Sphere", "Michael Chrichton", 528, "assets/sphereCover.jpg", true);

function displayBooks() {
    bookShelf.innerHTML = "";
    myLibrary.forEach((book, i) => {
        const endNumber = 0;
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
        bookCard.setAttribute("data-index", i);
        bookCard.id = book.id;
        bookCard.innerHTML = `<card-cover>
                                <img src=${book.bookCover} class="bookCover" />
                              </card-cover>
                              <card-info>
                                <h1>${book.title}</h1>
                                <h2>By ${book.author}</h2>
                                <h2>Pages: ${book.pageCount}</h2>
                              </card-info>
                              <card-btns>
                                <button type="button" class="cardBtn" id=${book.getReadStatus()}>${book.getReadStatus()}</button>
                                <button type="button" class="cardBtn" id="rmvBtn">Remove</button>
                              </card-btns>`;
        bookShelf.appendChild(bookCard);
    });
}
displayBooks();