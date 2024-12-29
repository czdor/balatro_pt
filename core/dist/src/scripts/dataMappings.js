"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexes = exports.indexDataMappings = exports.indexTitleMapping = void 0;
const jokers_1 = require("../../data/jokers");
const consumables_1 = require("../../data/consumables");
const modifiers_1 = require("../../data/modifiers");
const tags_1 = require("../../data/tags");
const textNgramAnalyzer = { type: "text", analyzer: "ngram_analyzer" };
exports.indexTitleMapping = {
    jokers: "Jokers",
    spectral_cards: "Spectral cards",
    tarot_cards: "Tarot cards",
    planet_cards: "Planet cards",
    editions: "Editions",
    enhacements: "Enhancements",
    seals: "Seals",
    tags: "Tags",
};
exports.indexDataMappings = [
    {
        indexTitle: "jokers",
        properties: {
            Joker: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
            Effect: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
            Cost: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
            Rarity: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
            Requirement: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
            Type: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
        },
        data: jokers_1.jokers.data,
    },
    {
        indexTitle: "spectral_cards",
        properties: {
            Spectral: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
            Description: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
        },
        data: consumables_1.spectralCards.data,
    },
    {
        indexTitle: "tarot_cards",
        properties: {
            Tarot: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
            Description: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
        },
        data: consumables_1.tarotCards.data,
    },
    {
        indexTitle: "planet_cards",
        properties: {
            Planet: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
            Addition: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
            PokerHand: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
            HandBaseScore: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
        },
        data: consumables_1.planetCards.data,
    },
    {
        indexTitle: "editions",
        properties: {
            Edition: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
            Effect: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
        },
        data: modifiers_1.editions.data,
    },
    {
        indexTitle: "enhancements",
        properties: {
            Enhancement: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
            Effect: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
        },
        data: modifiers_1.enhancements.data,
    },
    {
        indexTitle: "seals",
        properties: {
            Seal: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
            Effect: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
        },
        data: modifiers_1.seals.data,
    },
    {
        indexTitle: "tags",
        properties: {
            Tag: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
            Benefit: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
            Notes: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
            Ante: {
                properties: {
                    value: textNgramAnalyzer,
                },
            },
        },
        data: tags_1.tags.data,
    },
];
exports.indexes = exports.indexDataMappings.map((i) => i.indexTitle);
