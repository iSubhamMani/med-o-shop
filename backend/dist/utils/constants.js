"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PINCODE_REGEX = exports.PAGINATION_OFFSET = exports.PASSWORD_REGEX = exports.MONGO_DB_NAME = void 0;
const MONGO_DB_NAME = "test";
exports.MONGO_DB_NAME = MONGO_DB_NAME;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
exports.PASSWORD_REGEX = PASSWORD_REGEX;
const PAGINATION_OFFSET = 10;
exports.PAGINATION_OFFSET = PAGINATION_OFFSET;
const PINCODE_REGEX = /^[1-9][0-9]{5}$/;
exports.PINCODE_REGEX = PINCODE_REGEX;
