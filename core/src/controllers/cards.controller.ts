import { defaultLanguage } from "../../config";
import type { AvailableLanguages, Request, Response } from "../../types";
import {
  getEditions,
  getEnhancements,
  getJokers,
  getPlanetCards,
  getSeals,
  getSpectralCards,
  getTarotCards,
  getTags,
  getVouchers,
} from "../services/cards";

export const getAllJokers = (req: Request, res: Response): void => {
  try {
    const lang = req.headers["accept-language"] || defaultLanguage;
    let { data: jokers }: any = getJokers(lang as AvailableLanguages);

    res.status(200).send({
      jokers,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: "something went wrong",
    });
  }
};

export const getAllTags = (req: Request, res: Response): void => {
  try {
    const lang = req.headers["accept-language"] || defaultLanguage;
    const tags: any = getTags(lang as AvailableLanguages);

    res.status(200).send({
      tags,
    });
  } catch (err) {
    res.status(500).send({
      error: "something went wrong",
    });
  }
};

export const getAllEditions = (req: Request, res: Response): void => {
  try {
    const lang = req.headers["accept-language"] || defaultLanguage;
    const editions: any = getEditions(lang as AvailableLanguages);

    res.status(200).send({
      editions,
    });
  } catch (err) {
    res.status(500).send({
      error: "something went wrong",
    });
  }
};

export const getAllEnhancements = (req: Request, res: Response): void => {
  try {
    const lang = req.headers["accept-language"] || defaultLanguage;
    const enhancements: any = getEnhancements(lang as AvailableLanguages);

    res.status(200).send({
      enhancements,
    });
  } catch (err) {
    res.status(500).send({
      error: "something went wrong",
    });
  }
};

export const getAllSeals = (req: Request, res: Response): void => {
  try {
    const lang = req.headers["accept-language"] || defaultLanguage;
    const seals: any = getSeals(lang as AvailableLanguages);

    res.status(200).send({
      seals,
    });
  } catch (err) {
    res.status(500).send({
      error: "something went wrong",
    });
  }
};

export const getAllPlanetCards = (req: Request, res: Response): void => {
  try {
    const lang = req.headers["accept-language"] || defaultLanguage;
    const planetCards: any = getPlanetCards(lang as AvailableLanguages);

    res.status(200).send({
      planetCards,
    });
  } catch (err) {
    res.status(500).send({
      error: "something went wrong",
    });
  }
};

export const getAllTarotCards = (req: Request, res: Response): void => {
  try {
    const lang = req.headers["accept-language"] || defaultLanguage;
    const tarotCards: any = getTarotCards(lang as AvailableLanguages);

    res.status(200).send({
      tarotCards,
    });
  } catch (err) {
    res.status(500).send({
      error: "something went wrong",
    });
  }
};

export const getAllSpectralCards = (req: Request, res: Response): void => {
  try {
    const lang = req.headers["accept-language"] || defaultLanguage;
    const spectralCards: any = getSpectralCards(lang as AvailableLanguages);

    res.status(200).send({
      spectralCards,
    });
  } catch (err) {
    res.status(500).send({
      error: "something went wrong",
    });
  }
};

export const getAllVouchers = (req: Request, res: Response): void => {
  try {
    const lang = req.headers["accept-language"] || defaultLanguage;
    const vouchers: any = getVouchers(lang as AvailableLanguages);

    res.status(200).send({
      vouchers,
    });
  } catch (err) {
    res.status(500).send({
      error: "something went wrong",
    });
  }
};
