import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book('Advanced software testing', 'Rex Black', 2015);
const book2 = new Book('How Google Tests Software', 'James A. Whittaker', 2012);
const book3 = new Book('A Practitioners Guide to Software Test Design', 'Lee Copeland', 2004);

book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook1 = new EBook('Software Requirements ', 'Wiegers K.', 2013, 'PDF');
ebook1.printInfo();

ebook1.fileFormat = 'EPUB';
console.log(ebook1.fileFormat);

const booksArray = [book1, book2, book3, ebook1];
const oldestBook = Book.getOldestBook(booksArray);
console.log(`Oldest Book: ${oldestBook.title}, Year: ${oldestBook.year}`);

const ebook2 = EBook.createFromBook(book1, 'MOBI');
ebook2.printInfo();
