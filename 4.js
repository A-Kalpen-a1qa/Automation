class Book{
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

console.log(book1);
console.log(book2);
console.log(book3);