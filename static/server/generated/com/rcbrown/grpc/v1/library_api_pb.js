/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var proto = {};

var com_rcbrown_grpc_v1_library_book_pb = require('../../../../com/rcbrown/grpc/v1/library_book_pb.js');
goog.object.extend(proto, com_rcbrown_grpc_v1_library_book_pb);
goog.exportSymbol('com.rcbrown.grpc.v1.CheckoutBookRequest', null, proto);
goog.exportSymbol('com.rcbrown.grpc.v1.CheckoutBookResponse', null, proto);
goog.exportSymbol('com.rcbrown.grpc.v1.GetBooksRequest', null, proto);
goog.exportSymbol('com.rcbrown.grpc.v1.GetBooksResponse', null, proto);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.rcbrown.grpc.v1.GetBooksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.rcbrown.grpc.v1.GetBooksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.rcbrown.grpc.v1.GetBooksRequest.displayName = 'proto.com.rcbrown.grpc.v1.GetBooksRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.rcbrown.grpc.v1.GetBooksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.rcbrown.grpc.v1.GetBooksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.rcbrown.grpc.v1.GetBooksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.rcbrown.grpc.v1.GetBooksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.rcbrown.grpc.v1.GetBooksRequest}
 */
proto.com.rcbrown.grpc.v1.GetBooksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.rcbrown.grpc.v1.GetBooksRequest;
  return proto.com.rcbrown.grpc.v1.GetBooksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.rcbrown.grpc.v1.GetBooksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.rcbrown.grpc.v1.GetBooksRequest}
 */
proto.com.rcbrown.grpc.v1.GetBooksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.rcbrown.grpc.v1.GetBooksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.rcbrown.grpc.v1.GetBooksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.rcbrown.grpc.v1.GetBooksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.rcbrown.grpc.v1.GetBooksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.rcbrown.grpc.v1.GetBooksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.rcbrown.grpc.v1.GetBooksResponse.repeatedFields_, null);
};
goog.inherits(proto.com.rcbrown.grpc.v1.GetBooksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.rcbrown.grpc.v1.GetBooksResponse.displayName = 'proto.com.rcbrown.grpc.v1.GetBooksResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.rcbrown.grpc.v1.GetBooksResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.rcbrown.grpc.v1.GetBooksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.com.rcbrown.grpc.v1.GetBooksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.rcbrown.grpc.v1.GetBooksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.rcbrown.grpc.v1.GetBooksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    libraryBooksList: jspb.Message.toObjectList(msg.getLibraryBooksList(),
    com_rcbrown_grpc_v1_library_book_pb.LibraryBook.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.rcbrown.grpc.v1.GetBooksResponse}
 */
proto.com.rcbrown.grpc.v1.GetBooksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.rcbrown.grpc.v1.GetBooksResponse;
  return proto.com.rcbrown.grpc.v1.GetBooksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.rcbrown.grpc.v1.GetBooksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.rcbrown.grpc.v1.GetBooksResponse}
 */
proto.com.rcbrown.grpc.v1.GetBooksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new com_rcbrown_grpc_v1_library_book_pb.LibraryBook;
      reader.readMessage(value,com_rcbrown_grpc_v1_library_book_pb.LibraryBook.deserializeBinaryFromReader);
      msg.addLibraryBooks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.rcbrown.grpc.v1.GetBooksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.rcbrown.grpc.v1.GetBooksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.rcbrown.grpc.v1.GetBooksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.rcbrown.grpc.v1.GetBooksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLibraryBooksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      com_rcbrown_grpc_v1_library_book_pb.LibraryBook.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LibraryBook library_books = 1;
 * @return {!Array<!proto.com.rcbrown.grpc.v1.LibraryBook>}
 */
proto.com.rcbrown.grpc.v1.GetBooksResponse.prototype.getLibraryBooksList = function() {
  return /** @type{!Array<!proto.com.rcbrown.grpc.v1.LibraryBook>} */ (
    jspb.Message.getRepeatedWrapperField(this, com_rcbrown_grpc_v1_library_book_pb.LibraryBook, 1));
};


/** @param {!Array<!proto.com.rcbrown.grpc.v1.LibraryBook>} value */
proto.com.rcbrown.grpc.v1.GetBooksResponse.prototype.setLibraryBooksList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.com.rcbrown.grpc.v1.LibraryBook=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.rcbrown.grpc.v1.LibraryBook}
 */
proto.com.rcbrown.grpc.v1.GetBooksResponse.prototype.addLibraryBooks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.com.rcbrown.grpc.v1.LibraryBook, opt_index);
};


proto.com.rcbrown.grpc.v1.GetBooksResponse.prototype.clearLibraryBooksList = function() {
  this.setLibraryBooksList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.rcbrown.grpc.v1.CheckoutBookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.rcbrown.grpc.v1.CheckoutBookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.rcbrown.grpc.v1.CheckoutBookRequest.displayName = 'proto.com.rcbrown.grpc.v1.CheckoutBookRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.rcbrown.grpc.v1.CheckoutBookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.rcbrown.grpc.v1.CheckoutBookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.rcbrown.grpc.v1.CheckoutBookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.rcbrown.grpc.v1.CheckoutBookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.rcbrown.grpc.v1.CheckoutBookRequest}
 */
proto.com.rcbrown.grpc.v1.CheckoutBookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.rcbrown.grpc.v1.CheckoutBookRequest;
  return proto.com.rcbrown.grpc.v1.CheckoutBookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.rcbrown.grpc.v1.CheckoutBookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.rcbrown.grpc.v1.CheckoutBookRequest}
 */
proto.com.rcbrown.grpc.v1.CheckoutBookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.rcbrown.grpc.v1.CheckoutBookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.rcbrown.grpc.v1.CheckoutBookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.rcbrown.grpc.v1.CheckoutBookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.rcbrown.grpc.v1.CheckoutBookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.com.rcbrown.grpc.v1.CheckoutBookRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.com.rcbrown.grpc.v1.CheckoutBookRequest.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.rcbrown.grpc.v1.CheckoutBookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.rcbrown.grpc.v1.CheckoutBookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.rcbrown.grpc.v1.CheckoutBookResponse.displayName = 'proto.com.rcbrown.grpc.v1.CheckoutBookResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.rcbrown.grpc.v1.CheckoutBookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.com.rcbrown.grpc.v1.CheckoutBookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.rcbrown.grpc.v1.CheckoutBookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.rcbrown.grpc.v1.CheckoutBookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    libraryBook: (f = msg.getLibraryBook()) && com_rcbrown_grpc_v1_library_book_pb.LibraryBook.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.rcbrown.grpc.v1.CheckoutBookResponse}
 */
proto.com.rcbrown.grpc.v1.CheckoutBookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.rcbrown.grpc.v1.CheckoutBookResponse;
  return proto.com.rcbrown.grpc.v1.CheckoutBookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.rcbrown.grpc.v1.CheckoutBookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.rcbrown.grpc.v1.CheckoutBookResponse}
 */
proto.com.rcbrown.grpc.v1.CheckoutBookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new com_rcbrown_grpc_v1_library_book_pb.LibraryBook;
      reader.readMessage(value,com_rcbrown_grpc_v1_library_book_pb.LibraryBook.deserializeBinaryFromReader);
      msg.setLibraryBook(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.rcbrown.grpc.v1.CheckoutBookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.rcbrown.grpc.v1.CheckoutBookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.rcbrown.grpc.v1.CheckoutBookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.rcbrown.grpc.v1.CheckoutBookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLibraryBook();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      com_rcbrown_grpc_v1_library_book_pb.LibraryBook.serializeBinaryToWriter
    );
  }
};


/**
 * optional LibraryBook library_book = 1;
 * @return {?proto.com.rcbrown.grpc.v1.LibraryBook}
 */
proto.com.rcbrown.grpc.v1.CheckoutBookResponse.prototype.getLibraryBook = function() {
  return /** @type{?proto.com.rcbrown.grpc.v1.LibraryBook} */ (
    jspb.Message.getWrapperField(this, com_rcbrown_grpc_v1_library_book_pb.LibraryBook, 1));
};


/** @param {?proto.com.rcbrown.grpc.v1.LibraryBook|undefined} value */
proto.com.rcbrown.grpc.v1.CheckoutBookResponse.prototype.setLibraryBook = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.com.rcbrown.grpc.v1.CheckoutBookResponse.prototype.clearLibraryBook = function() {
  this.setLibraryBook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.rcbrown.grpc.v1.CheckoutBookResponse.prototype.hasLibraryBook = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto);
