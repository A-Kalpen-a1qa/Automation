const fs = require("fs");

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

let books = [
  new Book("1984", "George Orwell", 1949),
  new Book("The Hobbit", "J.R.R. Tolkien", 1937),
  new Book("Dune", "Frank Herbert", 1965)
];

let text = "";

for (const book of books) {
  text += `Title=${book.title}\n`;
  text += `Author=${book.author}\n`;
  text += `Year=${book.year}\n`;
  text += `---\n`;
}

fs.writeFileSync("books.txt", text);

console.log("Books saved to file!");
//---------

let fileContent = fs.readFileSync("books.txt", "utf-8");
let lines = fileContent.split("\n");
let loadedBooks = [];
let title, author, year;

for (const line of lines) {
  if (line.startsWith("Title=")) {
    title = line.replace("Title=", "");
  }
  if (line.startsWith("Author=")) {
    author = line.replace("Author=", "");
  }
  if (line.startsWith("Year=")) {
    year = parseInt(line.replace("Year=", ""));
  }
  if (line === "---") {
    loadedBooks.push(new Book(title, author, year));
  }
}

console.log("Books loaded from file:");
console.log(loadedBooks);