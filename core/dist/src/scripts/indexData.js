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
exports.indexData = exports.createIndexes = exports.deleteAllIndexes = void 0;
const elasticSearch_1 = require("../lib/elasticSearch");
const dataMappings_1 = require("./dataMappings");
const deleteAllIndexes = () => __awaiter(void 0, void 0, void 0, function* () {
    for (const { indexTitle } of dataMappings_1.indexDataMappings) {
        try {
            yield elasticSearch_1.client.indices.delete({ index: indexTitle });
            console.log(`Index ${indexTitle} deleted successfully.`);
        }
        catch (error) {
            console.error(`Error deleting index: ${indexTitle}`);
        }
    }
});
exports.deleteAllIndexes = deleteAllIndexes;
const createIndexes = () => __awaiter(void 0, void 0, void 0, function* () {
    // Create a new index with custom analyzer
    for (const { indexTitle, properties } of dataMappings_1.indexDataMappings) {
        yield elasticSearch_1.client.indices.create({
            index: indexTitle,
            body: {
                settings: {
                    analysis: {
                        tokenizer: {
                            ngram_tokenizer: {
                                type: "ngram",
                                min_gram: 1,
                                max_gram: 2,
                                token_chars: ["letter", "digit"],
                            },
                        },
                        filter: {
                            lowercase: {
                                type: "lowercase",
                            },
                        },
                        analyzer: {
                            ngram_analyzer: {
                                type: "custom",
                                tokenizer: "ngram_tokenizer",
                                filter: ["lowercase"],
                            },
                        },
                    },
                },
                mappings: {
                    properties,
                },
            },
        });
    }
    console.log("Indexes created successfully.");
});
exports.createIndexes = createIndexes;
const indexData = () => __awaiter(void 0, void 0, void 0, function* () {
    // index data
    for (const { indexTitle, data } of dataMappings_1.indexDataMappings) {
        for (const body of data) {
            yield elasticSearch_1.client.index({
                index: indexTitle,
                body,
            });
        }
    }
    // Refresh indexes
    for (const index of dataMappings_1.indexes) {
        yield elasticSearch_1.client.indices.refresh({ index });
    }
    console.log("Data indexed successfully");
});
exports.indexData = indexData;
