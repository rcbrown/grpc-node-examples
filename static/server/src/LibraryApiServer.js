const grpc = require('grpc');

// These are the generated code
const libraryApiGrpc = require('../generated/library_api_grpc_pb');
const libraryApiPb = require('../generated/library_api_pb');
const libraryBookGrpc = require('../generated/library_book_grpc_pb');
const libraryBookPb = require('../generated/library_book_pb');

const LibraryDao = require('../../../dao/LibraryDao');

module.exports = class LibraryApiServer {

    constructor({ host, port }) {
        this.server = new grpc.Server();

        // Add a descriptor with gRPC metadata that says what message types should be received
        // and returned at various URLS, followed by a map of handlers that match with RPC names
        // that implement the functionality at those endpoints. This class puts those handlers
        // into public instance fields below, so we can just pass `this` as the implementation.
        this.server.addService(libraryApiGrpc.LibraryAPIService, this);

        // Tell the server where it should listen for network connections.
        this.server.bind(`${host}:${port}`, grpc.ServerCredentials.createInsecure());

        this.dao = new LibraryDao();
    }

    start() {
        this.server.start();
    }

    async shutdown() {
        return new Promise((resolve, reject) => {
            this.server.tryShutdown((error, result) => {
                if (error) reject(error);
                else resolve(result);
            });
        });
    }

    // Handlers: These will be called by gRPC when their corresponding RPCs are called.
    // They are matched by name.

    getBooks = (call, callback) => {
        // This is the only business logic
        const books = this.dao.getBooks();

        // Need to map JSON array of objects into protobuf using the generated marshalling code.
        const pbBooks = books.map(book => {
            const pbBook = new libraryBookPb.LibraryBook();
            pbBook.setTitle(book.title);
            pbBook.setAuthor(book.author);
            pbBook.setCheckoutStatus(libraryBookPb.CheckoutStatus[book.checkoutStatus]);
            return pbBook;
        });
        
        // Build a protobuf response message with the list of books
        const getBooksResponse = new libraryApiPb.GetBooksResponse();
        getBooksResponse.setLibraryBooksList(pbBooks);

        // First parameter is error, second is response message
        callback(null, getBooksResponse);
    }

    checkoutBook = (call, callback) => {

        // call.request is a protobuf object containing a CheckoutBookRequest protobuf object,
        // which contains a field for the title.
        const title = call.request.getTitle();

        // Here's the business logic;
        const book = this.dao.checkoutBook(title);

        // Create a protobuf book for the return message
        const pbBook = new libraryBookPb.LibraryBook();
        pbBook.setTitle(book.title);
        pbBook.setAuthor(book.author);
        pbBook.setCheckoutStatus(libraryBookPb.CheckoutStatus[book.checkoutStatus]);

        // The actual return value is a protobuf CheckoutBookResponse,
        // into which we must stuff the LibraryBook
        const checkoutBookResponse = new libraryApiPb.CheckoutBookResponse();
        checkoutBookResponse.setLibraryBook(pbBook);
        
        // First parameter is error, second is response message
        callback(null, checkoutBookResponse);
    }
}