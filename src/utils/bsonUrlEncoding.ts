const { EJSON } = require('bson');
import * as base64url from 'base64-url';
/**
 * These will take a BSON object (an database result returned by the MongoDB library) and
 * encode/decode as a URL-safe string.
 */
export const bsonUrlEncoding = {
    encode: function (obj) {
        return base64url.encode(EJSON.stringify(obj));
    },
    decode: function (str) {
        return EJSON.parse(base64url.decode(str));
    }
};