"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const cards_controller_1 = require("../controllers/cards.controller");
const search_controller_1 = require("../controllers/search.controller");
// Jokers
router.get("/jokers", cards_controller_1.getAllJokers);
// Tags
router.get("/tags", cards_controller_1.getAllTags);
// Modifiers
router.get("/modifiers/editions", cards_controller_1.getAllEditions);
router.get("/modifiers/enhancements", cards_controller_1.getAllEnhancements);
router.get("/modifiers/seals", cards_controller_1.getAllSeals);
// Consumables
router.get("/consumables/planet", cards_controller_1.getAllPlanetCards);
router.get("/consumables/tarot", cards_controller_1.getAllTarotCards);
router.get("/consumables/spectral", cards_controller_1.getAllSpectralCards);
// Search
router.get("/search", search_controller_1.getSearchResult);
exports.default = router;
