"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTags = exports.getPlanetCards = exports.getTarotCards = exports.getSpectralCards = exports.getSeals = exports.getEnhancements = exports.getEditions = exports.getJokers = void 0;
const jokers_1 = require("../../data/jokers");
const modifiers_1 = require("../../data/modifiers");
const consumables_1 = require("../../data/consumables");
const tags_1 = require("../../data/tags");
const getJokers = () => {
    return jokers_1.jokers;
};
exports.getJokers = getJokers;
const getEditions = () => {
    return modifiers_1.editions;
};
exports.getEditions = getEditions;
const getEnhancements = () => {
    return modifiers_1.enhancements;
};
exports.getEnhancements = getEnhancements;
const getSeals = () => {
    return modifiers_1.seals;
};
exports.getSeals = getSeals;
const getSpectralCards = () => {
    return consumables_1.spectralCards;
};
exports.getSpectralCards = getSpectralCards;
const getTarotCards = () => {
    return consumables_1.tarotCards;
};
exports.getTarotCards = getTarotCards;
const getPlanetCards = () => {
    return consumables_1.planetCards;
};
exports.getPlanetCards = getPlanetCards;
const getTags = () => {
    return tags_1.tags;
};
exports.getTags = getTags;
