class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }

  set title(value) {
    if (typeof value !== "string") {
      throw new Error("Title must be a string");
    }
    this._title = value;
  }

  set author(value) {
    if (typeof value !== "string") {
      throw new Error("Author must be a string");
    }
    this._author = value;
  }

  set year(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("Year must be a positive number");
    }
    this._year = value;
  }

  printInfo() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`,
    );
  }

  static getOldestBook(books) {
    if (books.length === 0) {
      return null;
    }
    return books.reduce((oldest, book) =>
      book.year < oldest.year ? book : oldest,
    );
  }
}

export default Book;
