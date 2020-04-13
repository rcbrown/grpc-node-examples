const path = require('path');
const grpc = require('grpc');
const protoloader = require('@grpc/proto-loader');

const LibraryDao = require('../../../dao/LibraryDao');

module.exports = class LibraryApiClient {

    constructor({ host, port }) {
        const libraryApiProtoPath = path.resolve(__dirname, '../../proto/com/rcbrown/grpc/v1/library_api.proto');
        const libraryApiImportPath = path.resolve(__dirname, '../../proto');

        // Build an object containing protobuf descriptors and marshalling methods reflecting the .proto file.
        const libraryApiPackageDefinition = protoloader.loadSync(libraryApiProtoPath, {
            includeDirs: [libraryApiImportPath],
            enums: String,
        });

        // Decorate the proto definition with a service descriptor.
        const libraryApi = grpc.loadPackageDefinition(libraryApiPackageDefinition);

        // Instantiate the client with its server address and credentials
        this.client = new libraryApi.com.rcbrown.grpc.v1.LibraryAPI(`${host}:${port}`, grpc.credentials.createInsecure());
    }

    async getBooks() {
        return new Promise((resolve, reject) => {
            this.client.getBooks({}, (err, response) => {
                if (err) reject(err);
                else (resolve(response.libraryBooks));
            });
        });
    }

    async checkoutBook(title) {
        return new Promise((resolve, reject) => {
            this.client.checkoutBook({ title }, (err, response) => {
                if (err) reject(err);
                else(resolve(response.libraryBook));
            });
        });
    }
}