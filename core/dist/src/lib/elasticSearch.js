"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const elasticsearch_1 = __importDefault(require("@elastic/elasticsearch"));
const config_1 = require("../../config");
exports.client = new elasticsearch_1.default.Client({
    node: config_1.elasticsearch.node,
    auth: {
        username: config_1.elasticsearch.username,
        password: config_1.elasticsearch.password,
    },
});
