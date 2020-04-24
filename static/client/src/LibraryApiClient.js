const grpc = require('grpc');

// These are the generated code
const libraryApiGrpc = require('../generated/library_api_grpc_pb');
const libraryApiPb = require('../generated/library_api_pb');
const libraryBookGrpc = require('../generated/library_book_grpc_pb');
const libraryBookPb = require('../generated/library_book_pb');

module.exports = class LibraryApiClient {

    constructor({ host, port }) {
        this.client = new libraryApiGrpc.LibraryAPIClient(`${host}:${port}`, grpc.credentials.createInsecure());
    }

    mapCheckoutStatusToString(receivedInt) {
        return Object.keys(libraryBookPb.CheckoutStatus).find(key => libraryBookPb.CheckoutStatus[key] === receivedInt);
    };

    async getBooks() {
        // Build request message
        const getBooksRequestPb = new libraryApiPb.GetBooksRequest();

        // Invoke the RPC
        const getBooksResponsePb = await new Promise((resolve, reject) => {
            this.client.getBooks(getBooksRequestPb, (error, getBooksResponsePb) => {
                if (error) reject(error);
                else resolve(getBooksResponsePb);
            });
        });

        // Unmarshal the response message into regular JavaScript objects
        const booksPb = getBooksResponsePb.getLibraryBooksList();
        const books = booksPb.map(bookPb => ({
                title: bookPb.getTitle(),
                author: bookPb.getAuthor(),
                checkoutStatus: this.mapCheckoutStatusToString(bookPb.getCheckoutStatus()),
            })
        );

        return books;
    }

    async checkoutBook(title) {
        // Build request message
        const checkoutBookRequestPb = new libraryApiPb.CheckoutBookRequest();
        checkoutBookRequestPb.setTitle(title);

        // Invoke the RPC
        const checkoutBookResponsePb = await new Promise((resolve, reject) => {
            this.client.checkoutBook(checkoutBookRequestPb, (error, checkoutBookResponsePb) => {
                if (error) reject(error);
                else resolve(checkoutBookResponsePb);
            })
        });

        // Unmarshal the response message into a regular JavaScript object
        const bookPb = checkoutBookResponsePb.getLibraryBook();
        const book = {
            title: bookPb.getTitle(),
            author: bookPb.getAuthor(),
            checkoutStatus: this.mapCheckoutStatusToString(bookPb.getCheckoutStatus()),
        };

        return book;
    }
}