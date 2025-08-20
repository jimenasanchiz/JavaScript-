const myLibrary = [];
function Book (title, author, pages, read) {
  if(!new.target) {
    throw Error("You must use the 'new' operator to construct the function");
}
  this.title=title; 
  this.author=author; 
  this.pages=pages; 
  this.read=read;
  this.info=function (
    return "${this.book} by ${this.author}, ${this.pages} pages, " + this.read? "already read" : "not read yet"
  )
  this. id = crypto.randomUUID();

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}
  
function displaysBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
       console.log(myLibrary[i].info());
      console.log("\n");
  }
}
