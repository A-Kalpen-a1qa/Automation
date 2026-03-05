class Book {
  constructor(title, author, year, price) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.price = price;
  }
}

let book1 = new Book("1984", "George Orwell", 1949, 15);
let book2 = new Book("The Hobbit", "J.R.R. Tolkien", 1937, 20);
let book3 = new Book("The Alchemist", "Paulo Coelho", 1988, 12);

let List_Book = [];

function addBook(book) {
  if (book instanceof Book) {
    List_Book.push(book);
    console.log("The book has been added");
  } else {
    console.log("This is not a Book object");
  }
}
addBook(book1);
addBook(book2);
addBook(book3);
console.log(List_Book);
// ------------------------ 2
console.log("------------- 2");
function removeBook(title) {
  let oldLength = List_Book.length
  List_Book = List_Book.filter(book => book.title !== title)
  if (oldLength === List_Book.length) {
    console.log("There is no book with that title")
  } else {
    console.log("A book with that name has been deleted")
  }
}
removeBook("194");
removeBook("1984");

console.log(List_Book);
// ------------------------ 3
console.log("------------- 3");
function listAllBooks() {
  for (const book of List_Book) {
    console.log(book);
  }
}
listAllBooks();
// ------------------------ 4

let book4 = new Book("The Alchemist 2", "Paulo Coelho", 1990, 14);

function searchByAuthor(author) {
  let i = 0;
  for (const book of List_Book) {
    if (List_Book[i].author == author) {
      console.log(List_Book[i]);
      i++;
    } else {
      i++;
    }
  }
}

console.log("------------- 4");
addBook(book4);
searchByAuthor("Paulo Coelho");

