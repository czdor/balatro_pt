import type { Request, Response } from "../../types";
import {
  getEditions,
  getEnhancements,
  getJokers,
  getPlanetCards,
  getSeals,
  getSpectralCards,
  getTarotCards,
  getTags,
} from "../services/cards";

export const getAllJokers = (req: Request, res: Response): void => {
  try {
    const { currentPage = 0, itemsPerPage = 10 } = req.query;
    let { title, dataScheme, data: _jokers }: any = getJokers();
    const totalJokers = _jokers || [];

    const totalPages = Math.ceil(totalJokers.length / Number(itemsPerPage));

    const startIndex = Number(currentPage) * Number(itemsPerPage);
    const endIndex = startIndex + Number(itemsPerPage);

    const jokers = totalJokers.slice(startIndex, endIndex);

    res.status(200).send({
      totalPages,
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
    const tags: any = getTags();

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
    const editions: any = getEditions();

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
    const enhancements: any = getEnhancements();

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
    const seals: any = getSeals();

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
    const planetCards: any = getPlanetCards();

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
    const tarotCards: any = getTarotCards();

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
    const spectralCards: any = getSpectralCards();

    res.status(200).send({
      spectralCards,
    });
  } catch (err) {
    res.status(500).send({
      error: "something went wrong",
    });
  }
};
