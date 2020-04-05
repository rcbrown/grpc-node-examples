const LibraryApiServer = require('./LibraryApiServer');

module.exports = function runServer() {
    const server = new LibraryApiServer({
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || '6565',
    });
    server.start();
}