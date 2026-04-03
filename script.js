const myLibrary = [];
const bookShelf = document.getElementById("bookShelf");
const addBtn = document.getElementById("addBtn");
const dialog = document.querySelector("dialog");
const closeDialog = document.getElementById("clsDialogBtn");
const submitBtn = document.getElementById("submitBook");
const bookForm = document.getElementById("bookForm");



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
    console.log(book.id + " " + book.title + " added!");
}
function displayBooks() {
    bookShelf.innerHTML = "";
    myLibrary.forEach((book, i) => {
        const endNumber = 0;
        const bookCard = document.createElement("div");
        bookCard.className = "bookCard";
        bookCard.setAttribute("data-index", i);
        bookCard.id = book.id;
        bookCard.addEventListener('click', (event) => {
            if (event.target.matches('.rmvBtn')){
                let IdToRemove = event.target.closest(".bookCard").id;
                console.log (IdToRemove);
                let index = myLibrary.findIndex(book => book.id == IdToRemove);
                if (index !== -1) {
                myLibrary.splice(index, 1);
                }
                displayBooks();
            }
            else if (event.target.matches('#Read')){
                event.target.id = "Unread";
                event.target.innerHTML= "Unread";
            } 
            else if (event.target.matches('#Unread')){
                event.target.id = "Read";
                event.target.innerHTML = "Read";
            }
        });
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
                                <button type="button" class="cardBtn rmvBtn" id="rmvBtn">Remove</button>
                              </card-btns>`;
        bookShelf.appendChild(bookCard);
    });
}
function capitalizeLetters (stringToCap){
    words = stringToCap.split(" ");
    for (let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() 
        + words[i].substr(1);
    }
    words.join(" ");

    return words;
}

addBtn.addEventListener("click", () => {
    dialog.showModal();
});
bookForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let bkTitle = capitalizeLetters(document.getElementById("bkTitle").value);
    let bkAuthor = capitalizeLetters(document.getElementById("bkAuthor").value);
    let pgCount = document.getElementById("pgCount").value;
    let bkCover = document.getElementById("bkCover").value;
    console.log(bkTitle + ":" + bkAuthor);
    addBookToLibrary(bkTitle, bkAuthor, pgCount, bkCover, false);
    displayBooks();
    dialog.close();
    bookForm.reset();
});
closeDialog.addEventListener("click", () => {
    dialog.close();
});


addBookToLibrary("The Lord Of The Rings", "J. R. R. Tolkien", 1200,"assets/lotrCover.jpg", true);
addBookToLibrary("Moby Dick", "Herman Mellville", 750, "assets/mobyCover.jpg", false);
addBookToLibrary("Eragon", "Christopher Paolini", 544, "assets/eragonCover.jpg", true);
addBookToLibrary("Sphere", "Michael Chrichton", 528, "assets/sphereCover.jpg", true);


displayBooks();