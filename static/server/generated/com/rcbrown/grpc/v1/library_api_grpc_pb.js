// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var com_rcbrown_grpc_v1_library_api_pb = require('../../../../com/rcbrown/grpc/v1/library_api_pb.js');
var com_rcbrown_grpc_v1_library_book_pb = require('../../../../com/rcbrown/grpc/v1/library_book_pb.js');

function serialize_com_rcbrown_grpc_v1_CheckoutBookRequest(arg) {
  if (!(arg instanceof com_rcbrown_grpc_v1_library_api_pb.CheckoutBookRequest)) {
    throw new Error('Expected argument of type com.rcbrown.grpc.v1.CheckoutBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_rcbrown_grpc_v1_CheckoutBookRequest(buffer_arg) {
  return com_rcbrown_grpc_v1_library_api_pb.CheckoutBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_rcbrown_grpc_v1_CheckoutBookResponse(arg) {
  if (!(arg instanceof com_rcbrown_grpc_v1_library_api_pb.CheckoutBookResponse)) {
    throw new Error('Expected argument of type com.rcbrown.grpc.v1.CheckoutBookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_rcbrown_grpc_v1_CheckoutBookResponse(buffer_arg) {
  return com_rcbrown_grpc_v1_library_api_pb.CheckoutBookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_rcbrown_grpc_v1_GetBooksRequest(arg) {
  if (!(arg instanceof com_rcbrown_grpc_v1_library_api_pb.GetBooksRequest)) {
    throw new Error('Expected argument of type com.rcbrown.grpc.v1.GetBooksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_rcbrown_grpc_v1_GetBooksRequest(buffer_arg) {
  return com_rcbrown_grpc_v1_library_api_pb.GetBooksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_rcbrown_grpc_v1_GetBooksResponse(arg) {
  if (!(arg instanceof com_rcbrown_grpc_v1_library_api_pb.GetBooksResponse)) {
    throw new Error('Expected argument of type com.rcbrown.grpc.v1.GetBooksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_rcbrown_grpc_v1_GetBooksResponse(buffer_arg) {
  return com_rcbrown_grpc_v1_library_api_pb.GetBooksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A minimal sample API that a library might present.
var LibraryAPIService = exports.LibraryAPIService = {
  // Retrieves all of the books in the library.
getBooks: {
    path: '/com.rcbrown.grpc.v1.LibraryAPI/GetBooks',
    requestStream: false,
    responseStream: false,
    requestType: com_rcbrown_grpc_v1_library_api_pb.GetBooksRequest,
    responseType: com_rcbrown_grpc_v1_library_api_pb.GetBooksResponse,
    requestSerialize: serialize_com_rcbrown_grpc_v1_GetBooksRequest,
    requestDeserialize: deserialize_com_rcbrown_grpc_v1_GetBooksRequest,
    responseSerialize: serialize_com_rcbrown_grpc_v1_GetBooksResponse,
    responseDeserialize: deserialize_com_rcbrown_grpc_v1_GetBooksResponse,
  },
  // Checks out a book identified by title.
checkoutBook: {
    path: '/com.rcbrown.grpc.v1.LibraryAPI/CheckoutBook',
    requestStream: false,
    responseStream: false,
    requestType: com_rcbrown_grpc_v1_library_api_pb.CheckoutBookRequest,
    responseType: com_rcbrown_grpc_v1_library_api_pb.CheckoutBookResponse,
    requestSerialize: serialize_com_rcbrown_grpc_v1_CheckoutBookRequest,
    requestDeserialize: deserialize_com_rcbrown_grpc_v1_CheckoutBookRequest,
    responseSerialize: serialize_com_rcbrown_grpc_v1_CheckoutBookResponse,
    responseDeserialize: deserialize_com_rcbrown_grpc_v1_CheckoutBookResponse,
  },
};

exports.LibraryAPIClient = grpc.makeGenericClientConstructor(LibraryAPIService);
