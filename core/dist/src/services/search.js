"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const dataMappings_1 = require("../scripts/dataMappings");
const elasticSearch_1 = require("../lib/elasticSearch");
const searchLimit = 10;
const fields = dataMappings_1.indexDataMappings.reduce((accum, curr) => {
    const properties = Object.keys(curr.properties);
    for (let i = 0; i < properties.length; i++) {
        properties[i] = properties[i] + ".value";
    }
    return accum.concat(properties);
}, []);
const search = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { hits } = yield elasticSearch_1.client.search({
        index: "*",
        body: {
            query: {
                multi_match: {
                    query,
                    fields,
                },
            },
            size: searchLimit,
        },
    });
    const data = {};
    hits.hits.map(({ _index, _source }) => {
        // @ts-ignore
        const category = dataMappings_1.indexTitleMapping[_index];
        if (!Object.keys(data).includes(category)) {
            data[category] = [];
        }
        data[category].push(_source);
    });
    return data;
});
exports.search = search;
