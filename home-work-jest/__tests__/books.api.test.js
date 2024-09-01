const axios = require('axios');
const BooksController = require('../src/controllers/BooksController');
const AccountController = require('../src/controllers/AccountController');

describe('Book Store API Tests', () => {
    let token;
    beforeAll(async () => {
        token = await AccountController.getAuthToken('hkomrako', 'GmmWseR6**');
        //9faa9232-1c69-4914-ad46-02bac8d7d46e
    })
 
    test("Get all books in a list", async () => {
        const response = await BooksController.getBooksList();
        // console.log(response.data);
        expect(response.status).toEqual(200);
        expect(response.data.books).toHaveLength(8);
        expect(response.data.books[0].title).toBe("Git Pocket Guide");
    });

    test("Verify book by ISBN", async () => {
        const response = await BooksController.getBookByISBN('9781593277574');
        // console.log(response.data);
        expect(response.status).toEqual(200);
        expect(response.data.title).toBe("Understanding ECMAScript 6");
    });

    test("Add book", async () => {
        console.log(token);
        const response = await BooksController.addBook('9faa9232-1c69-4914-ad46-02bac8d7d46e', '9781593277574', token);
        expect(response.status).toBe(201);
    });

    test("Delete books", async () => {
        console.log(token);
        const response = await BooksController.removeAllUserBooks('9faa9232-1c69-4914-ad46-02bac8d7d46e', token);
        expect(response.status).toBe(204);
    });

});

describe('Book Store User API Tests', () => {
    let token;
    beforeAll(async () => {
        token = await AccountController.getAuthToken('hkomrako1', 'GmmWseR6**');
    })

    test("Verify if user authorized", async () => {
        const response = await AccountController.isAuthorized('hkomrako1', 'GmmWseR6**');
        console.log(response.data);
        expect(response.status).toEqual(200);
    });

});


