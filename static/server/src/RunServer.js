const LibraryApiServer = require('./LibraryApiServer');

module.exports = function runServer() {
    const server = new LibraryApiServer({
        host: '0.0.0.0',
        port: '6565',
    });
    server.start();
}