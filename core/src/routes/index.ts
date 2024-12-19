import express from "express";
const router = express.Router();

import {
  getAllEditions,
  getAllEnhancements,
  getAllJokers,
  getAllPlanetCards,
  getAllSeals,
  getAllSpectralCards,
  getAllTags,
  getAllTarotCards,
} from "../controllers/cards.controller";

import { searchJokers } from "../controllers/search.controller";

// Jokers
router.get("/jokers", getAllJokers);

// Tags
router.get("/tags", getAllTags);

// Modifiers
router.get("/modifiers/editions", getAllEditions);
router.get("/modifiers/enhancements", getAllEnhancements);
router.get("/modifiers/seals", getAllSeals);

// Consumables
router.get("/consumables/planet", getAllPlanetCards);
router.get("/consumables/tarot", getAllTarotCards);
router.get("/consumables/spectral", getAllSpectralCards);

// Search
router.get("/search/jokers", searchJokers);

export default router;
