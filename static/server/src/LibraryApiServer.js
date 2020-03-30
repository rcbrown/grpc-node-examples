const grpc = require('grpc');

// These are the generated code
const libraryApiGrpc = require('../generated/com/rcbrown/grpc/v1/library_api_grpc_pb');
const libraryApiPb = require('../generated/com/rcbrown/grpc/v1/library_api_pb');
const libraryBookGrpc = require('../generated/com/rcbrown/grpc/v1/library_book_grpc_pb');
const libraryBookPb = require('../generated/com/rcbrown/grpc/v1/library_book_pb');

const LibraryDao = require('../../../dao/LibraryDao');

module.exports = class LibraryApiServer {

    constructor({ host, port }) {
        this.server = new grpc.Server();
        this.server.addService(libraryApiGrpc.LibraryAPIService, this);
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
        const books = this.dao.getBooks();
        const pbBooks = books.map(book => {
            const pbBook = new libraryBookPb.com.rcbrown.grpc.v1.LibraryBook();
            pbBook.setTitle(book.title);
            pbBook.setAuthor(book.author);
            pbBook.setCheckoutStatus(libraryBookPb.com.rcbrown.grpc.v1.CheckoutStatus[book.checkoutStatus]);
        });
        
        const getBooksResponse = new libraryApiPb.com.rcbrown.grpc.v1.GetBooksResponse();
        getBooksResponse.setLibraryBooksList(pbBooks);
        callback(null, getBooksResponse);
    }

    checkoutBook = (title) => this.dao.checkoutBook(title);
}