const util = require('util');
const LibraryApiClient = require('./LibraryApiClient');

// TODO - Do this stuff
module.exports = function runClient() {

    const client = new LibraryApiClient({
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || '6565',
    });
    
    const books = client.getBooks();
    console.log(util.inspect(books, null, 5));

    const checkedOutVonnegut = client.checkoutBook('The Sirens of Titan');
    console.log(util.inspect(checkedOutVonnegut, null, 5));
}