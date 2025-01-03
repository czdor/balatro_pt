import { jokers as enJokers } from "../../data/en/jokers";
import { jokers as esJokers } from "../../data/es/jokers";
import {
  enhancements as enEnhancements,
  editions as enEditions,
  seals as enSeals,
} from "../../data/en/modifiers";
import {
  enhancements as esEnhancements,
  editions as esEditions,
  seals as esSeals,
} from "../../data/es/modifiers";
import {
  planetCards as enPlanetCards,
  spectralCards as enSpectralCards,
  tarotCards as enTarotCards,
  vouchers as enVouchers,
} from "../../data/en/consumables";
import {
  planetCards as esPlanetCards,
  spectralCards as esSpectralCards,
  tarotCards as esTarotCards,
  vouchers as esVouchers,
} from "../../data/es/consumables";
import { tags as enTags } from "../../data/en/tags";
import { tags as esTags } from "../../data/es/tags";
import { AvailableLanguages } from "../../types";

export const getJokers = (lang: AvailableLanguages) => {
  switch (lang) {
    case "en":
      return enJokers;
    case "es":
      return esJokers;
    default:
      return enJokers;
  }
};

export const getEditions = (lang: AvailableLanguages) => {
  switch (lang) {
    case "en":
      return enEditions;
    case "es":
      return esEditions;
    default:
      return enEditions;
  }
};

export const getEnhancements = (lang: AvailableLanguages) => {
  switch (lang) {
    case "en":
      return enEnhancements;
    case "es":
      return esEnhancements;
    default:
      return enEnhancements;
  }
};

export const getSeals = (lang: AvailableLanguages) => {
  switch (lang) {
    case "en":
      return enSeals;
    case "es":
      return esSeals;
    default:
      return enSeals;
  }
};

export const getSpectralCards = (lang: AvailableLanguages) => {
  switch (lang) {
    case "en":
      return enSpectralCards;
    case "es":
      return esSpectralCards;
    default:
      return enSpectralCards;
  }
};

export const getTarotCards = (lang: AvailableLanguages) => {
  switch (lang) {
    case "en":
      return enTarotCards;
    case "es":
      return esTarotCards;
    default:
      return enTarotCards;
  }
};

export const getPlanetCards = (lang: AvailableLanguages) => {
  switch (lang) {
    case "en":
      return enPlanetCards;
    case "es":
      return esPlanetCards;
    default:
      return enPlanetCards;
  }
};

export const getTags = (lang: AvailableLanguages) => {
  switch (lang) {
    case "en":
      return enTags;
    case "es":
      return esTags;
    default:
      return enTags;
  }
};

export const getVouchers = (lang: AvailableLanguages) => {
  switch (lang) {
    case "en":
      return enVouchers;
    case "es":
      return esVouchers;
    default:
      return enVouchers;
  }
};
