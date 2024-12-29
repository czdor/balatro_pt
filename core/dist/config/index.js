"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.elasticsearch = exports.DefaultPort = exports.ClientUrl = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.ClientUrl = "http://localhost:5173";
exports.DefaultPort = 8000;
exports.elasticsearch = {
    node: (_a = process.env.ELASTICSEARCH_NODE) !== null && _a !== void 0 ? _a : "",
    username: (_b = process.env.ELASTICSEARCH_USERNAME) !== null && _b !== void 0 ? _b : "",
    password: (_c = process.env.ELASTICSEARCH_PASSWORD) !== null && _c !== void 0 ? _c : "",
};
