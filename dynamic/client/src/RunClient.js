const util = require('util');
const LibraryApiClient = require('./LibraryApiClient');

module.exports = async function runClient() {

    const client = new LibraryApiClient({
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || '6565',
    });

    // Call both client methods and print the results
    
    const books = await client.getBooks();
    console.log(`Books in library:\n${util.inspect(books, null, 5)}\n`);

    const checkedOutVonnegut = await client.checkoutBook('The Sirens of Titan');
    console.log(`Checked out book:\n${util.inspect(checkedOutVonnegut, null, 5)}\n`);
}