import Book from './Book.js';

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== 'string') {
            throw new Error('File format must be a string');
        }
        this._fileFormat = value;
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, File Format: ${this.fileFormat}`);
    }

    static createFromBook(book, fileFormat) {
        if (!(book instanceof Book)) {
            throw new Error('Argument must be an instance of Book');
        }
        return new EBook(book.title, book.author, book.year, fileFormat);
    }
}

export default EBook;
