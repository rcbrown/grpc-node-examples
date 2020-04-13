const path = require('path');
const grpc = require('grpc');
const protoloader = require('@grpc/proto-loader');

const LibraryDao = require('../../../dao/LibraryDao');

module.exports = class LibraryApiServer {

    constructor({ host, port }) {
        this.server = new grpc.Server();

        const libraryApiProtoPath = path.resolve(__dirname, '../../proto/com/rcbrown/grpc/v1/library_api.proto');
        const libraryApiImportPath = path.resolve(__dirname, '../../proto');

        // Build an object containing protobuf descriptors and marshalling methods reflecting the .proto file.
        const libraryApiPackageDefinition = protoloader.loadSync(libraryApiProtoPath, {
            includeDirs: [libraryApiImportPath],
            enums: String,
        });

        // Decorate the proto definition with a service descriptor.
        const libraryApiServiceDescriptor = grpc.loadPackageDefinition(libraryApiPackageDefinition);

        // Pass the service descriptor to the server along with a handlers map.
        this.server.addService(libraryApiServiceDescriptor.com.rcbrown.grpc.v1.LibraryAPI.service, this);

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
        const libraryBooks = this.dao.getBooks();

        const responseMessage = { libraryBooks };
        // First parameter is error, second is message to return
        callback(null, responseMessage);
    }

    checkoutBook = (call, callback) => {
        const requestMessage = call.request;
        const { title } = requestMessage;

        const libraryBook = this.dao.checkoutBook(title);

        const responseMessage = { libraryBook };
        callback(null, responseMessage);
    }

    // If you prefer one-liners...
    // getBooks = (call, callback) => callback(null, { libraryBooks: this.dao.getBooks() });

    // checkoutBook = (call, callback) => callback(null, { libraryBook: this.dao.checkoutBook(call.request.title) });
}