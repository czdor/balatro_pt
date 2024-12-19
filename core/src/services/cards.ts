import { jokers } from "../../data/jokers";
import { enhancements, editions, seals } from "../../data/modifiers";
import { planetCards, spectralCards, tarotCards } from "../../data/consumables";
import { tags } from "../../data/tags";

export const getJokers = () => {
  return jokers;
};

export const getEditions = () => {
  return editions;
};

export const getEnhancements = () => {
  return enhancements;
};

export const getSeals = () => {
  return seals;
};

export const getSpectralCards = () => {
  return spectralCards;
};

export const getTarotCards = () => {
  return tarotCards;
};

export const getPlanetCards = () => {
  return planetCards;
};

export const getTags = () => {
  return tags;
};
