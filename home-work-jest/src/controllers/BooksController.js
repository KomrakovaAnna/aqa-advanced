const BaseController = require("./BaseController");

class BooksController extends BaseController {

    constructor() {
        super();
    }

    async getBooksList(){
        return await this.axiosInstance.get('/BookStore/v1/Books');
    }

    async getBookByISBN() {
        return await this.axiosInstance.get('/BookStore/v1/Book?ISBN=9781593277574');
    }

    async addBook(userId, isbn, token){
        return await this.axiosInstance.post('/BookStore/v1/Books',
            {
                userId,
                collectionOfIsbns: [
                  {
                    isbn,
                  },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
             }
        );
    } 
    
    async deleteBooks(userId, token){
        return await this.axiosInstance.delete('/BookStore/v1/Books',
            {
                userId,
                
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
             }
        );
    }
}

module.exports = new BooksController();