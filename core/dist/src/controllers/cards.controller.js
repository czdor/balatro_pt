"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllSpectralCards = exports.getAllTarotCards = exports.getAllPlanetCards = exports.getAllSeals = exports.getAllEnhancements = exports.getAllEditions = exports.getAllTags = exports.getAllJokers = void 0;
const cards_1 = require("../services/cards");
const getAllJokers = (req, res) => {
    try {
        // const { currentPage = 0, itemsPerPage = 10 } = req.query;
        let { title, dataScheme, data: jokers } = (0, cards_1.getJokers)();
        // const totalJokers = jokers || [];
        // const totalPages = Math.ceil(totalJokers.length / Number(itemsPerPage));
        // const startIndex = Number(currentPage) * Number(itemsPerPage);
        // const endIndex = startIndex + Number(itemsPerPage);
        // const _jokers = totalJokers.slice(startIndex, endIndex);
        res.status(200).send({
            // totalPages,
            jokers,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            error: "something went wrong",
        });
    }
};
exports.getAllJokers = getAllJokers;
const getAllTags = (req, res) => {
    try {
        const tags = (0, cards_1.getTags)();
        res.status(200).send({
            tags,
        });
    }
    catch (err) {
        res.status(500).send({
            error: "something went wrong",
        });
    }
};
exports.getAllTags = getAllTags;
const getAllEditions = (req, res) => {
    try {
        const editions = (0, cards_1.getEditions)();
        res.status(200).send({
            editions,
        });
    }
    catch (err) {
        res.status(500).send({
            error: "something went wrong",
        });
    }
};
exports.getAllEditions = getAllEditions;
const getAllEnhancements = (req, res) => {
    try {
        const enhancements = (0, cards_1.getEnhancements)();
        res.status(200).send({
            enhancements,
        });
    }
    catch (err) {
        res.status(500).send({
            error: "something went wrong",
        });
    }
};
exports.getAllEnhancements = getAllEnhancements;
const getAllSeals = (req, res) => {
    try {
        const seals = (0, cards_1.getSeals)();
        res.status(200).send({
            seals,
        });
    }
    catch (err) {
        res.status(500).send({
            error: "something went wrong",
        });
    }
};
exports.getAllSeals = getAllSeals;
const getAllPlanetCards = (req, res) => {
    try {
        const planetCards = (0, cards_1.getPlanetCards)();
        res.status(200).send({
            planetCards,
        });
    }
    catch (err) {
        res.status(500).send({
            error: "something went wrong",
        });
    }
};
exports.getAllPlanetCards = getAllPlanetCards;
const getAllTarotCards = (req, res) => {
    try {
        const tarotCards = (0, cards_1.getTarotCards)();
        res.status(200).send({
            tarotCards,
        });
    }
    catch (err) {
        res.status(500).send({
            error: "something went wrong",
        });
    }
};
exports.getAllTarotCards = getAllTarotCards;
const getAllSpectralCards = (req, res) => {
    try {
        const spectralCards = (0, cards_1.getSpectralCards)();
        res.status(200).send({
            spectralCards,
        });
    }
    catch (err) {
        res.status(500).send({
            error: "something went wrong",
        });
    }
};
exports.getAllSpectralCards = getAllSpectralCards;
