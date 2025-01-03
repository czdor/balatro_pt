export { Request, Response } from "express";

export interface Data {
  title: string;
  dataScheme: string[];
}

export type AvailableLanguages = "en" | "es";
